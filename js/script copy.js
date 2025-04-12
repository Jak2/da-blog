document.addEventListener('DOMContentLoaded', function() {
    const sidebarLinksContainer = document.getElementById('sidebar-links');
    const contentTitleElement = document.getElementById('content-title');
    const contentBodyElement = document.getElementById('content-body');

    function loadTopic(slug) {
        fetch(`data/topics/${slug}.json`)
            .then(response => response.json())
            .then(data => {
                contentTitleElement.textContent = data.title;
                const contentPath = `data/pages/${data.contentFile}`; // Directly use the contentFile path
                fetch(contentPath)
                    .then(response => response.text())
                    .then(markdownContent => {
                        const htmlContent = marked.parse(markdownContent);
                        contentBodyElement.innerHTML = htmlContent;
                    })
                    .catch(error => {
                        contentBodyElement.innerHTML = '<p>Error loading content for this topic.</p>';
                        console.error('Error fetching HTML content:', error);
                    });
            })
            .catch(error => {
                contentBodyElement.innerHTML = '<p>Error loading topic metadata.</p>';
                console.error('Error fetching topic metadata:', error);
            });
    }

    function renderSidebar(sidebarData, parentElement) {
        sidebarData.forEach(item => {
            const listItem = document.createElement('li');
            if (item.children) {
                const dropdownToggle = document.createElement('span');
                dropdownToggle.textContent = item.name;
                dropdownToggle.classList.add('dropdown-toggle'); // For styling
                listItem.appendChild(dropdownToggle);

                const dropdownList = document.createElement('ul');
                dropdownList.classList.add('dropdown-list');
                renderSidebar(item.children, dropdownList); // Recursive call for children
                listItem.appendChild(dropdownList);

                dropdownToggle.addEventListener('click', function() {
                    dropdownList.classList.toggle('open');
                });
            } else {
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
            }
            parentElement.appendChild(listItem);
        });
    }

    fetch('data/sidebar.json')
        .then(response => response.json())
        .then(sidebarData => {
            renderSidebar(sidebarData, sidebarLinksContainer);

            // Load the first top-level topic by default (if it's not a dropdown)
            const firstLink = sidebarLinksContainer.querySelector('a[data-slug]');
            if (firstLink) {
                firstLink.click();
            } else if (sidebarData[0] && sidebarData[0].children && sidebarData[0].children.length > 0) {
                const firstDropdownLink = sidebarLinksContainer.querySelector('.dropdown-list a[data-slug]');
                if (firstDropdownLink) {
                    firstDropdownLink.click();
                }
            }
        })
        .catch(error => {
            sidebarLinksContainer.innerHTML = '<p>Error loading sidebar links.</p>';
            console.error('Error fetching sidebar data:', error);
        });
});