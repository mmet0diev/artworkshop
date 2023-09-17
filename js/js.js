// Image data (you can fetch this from an external source as well)
const imageData = [
    {
      title: 'Picture 1',
      description: 'Description: This is the first image.',
      origin: 'Origin 1',
      price: '$100',
      fileName: 'pic1.jpg',
    },
    // Add more image objects as needed
  ];
  
  // Function to render images
  function renderImages() {
    const imageGrid = document.querySelector('.image-grid ul');
  
    // Clear existing content
    imageGrid.innerHTML = '';
  
    imageData.forEach((image, index) => {
      const listItem = document.createElement('li');
      const imageItem = document.createElement('div');
      const imageDescription = document.createElement('div');
      const imgElement = document.createElement('img');
      const textElement = document.createElement('div');
  
      listItem.appendChild(imageItem);
      imageItem.appendChild(imageDescription);
      imageDescription.appendChild(imgElement);
      imageDescription.appendChild(textElement);

      // Set attributes and content based on image data
      imgElement.src = `../imgs/${image.fileName}`;
      imgElement.alt = `pic${index + 1}`;
      textElement.innerHTML = `
        <h2 id="pictitle${index + 1}">${image.title}</h2>
        <p id="picdesc${index + 1}">${image.description}</p>
        <p id="picorigin${index + 1}">Origin: ${image.origin}</p>
        <p id="picprice${index + 1}">Price: ${image.price}</p>
      `;
  
      imageGrid.appendChild(listItem);
    });
  }
  
  // Call the renderImages function to display the images
  renderImages();