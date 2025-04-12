document.addEventListener('DOMContentLoaded', function() {
    const sidebarLinksContainer = document.getElementById('sidebar-links');
    const contentTitleElement = document.getElementById('content-title');
    const contentBodyElement = document.getElementById('content-body');

    function loadTopic(slug) {
        console.log('loadTopic called with:', slug);
        console.log('Attempting to fetch sidebar.json...');
        fetch(`data/topics/${slug}.json`)
            .then(response => response.json())
            .then(data => {
                contentTitleElement.textContent = data.title;
                console.log('contentFile:', data.contentFile);
                fetch(`data/topics/${data.contentFile}`)
                    .then(response => response.text())
                    .then(markdownContent => {
                        console.log('markdownContent:', markdownContent);
                        const htmlContent = marked.parse(markdownContent);
                        console.log('htmlContent:', htmlContent);
                        contentBodyElement.innerHTML = htmlContent;
                    })
                    .catch(error => {
                        contentBodyElement.innerHTML = '<p>Error loading Markdown content.</p>';
                        console.error('Error fetching Markdown content:', error);
                    });
            })
            .catch(error => {
                contentBodyElement.innerHTML = '<p>Error loading topic metadata.</p>';
                console.error('Error fetching topic metadata:', error);
            });
    }

    fetch('data/sidebar.json')
        .then(response => response.json())
        .then(sidebarData => {
            sidebarData.forEach(item => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.textContent = item.name;
                link.href = '#';
                link.dataset.slug = item.slug;
                link.addEventListener('click', function(event) {
                    event.preventDefault();
                    const slug = this.dataset.slug;
                    loadTopic(slug);
                });
                listItem.appendChild(link);
                sidebarLinksContainer.appendChild(listItem);

                if (sidebarData.indexOf(item) === 0) {
                    loadTopic(item.slug);
                }
            });
        })
        .catch(error => {
            sidebarLinksContainer.innerHTML = '<p>Error loading sidebar links.</p>';
            console.error('Error fetching sidebar data:', error);
        });
});