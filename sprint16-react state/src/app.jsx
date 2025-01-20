.App {
    text-align: center;
  }
  
  .App-logo {
    height: 40vmin;
    pointer-events: none;
    animation: App-logo-spin infinite 20s linear;
     /* Added animation */
  }
  
  .app-container {
    background-image: linear-gradient(120deg, #f6d365, #fda085);
    min-height: 100vh;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
  }
  
  .App-link {
    color: #61dafb;
    text-decoration: none;
     /* Ensures no underline */
    font-weight: bold; 
    /* Optional: Enhances visibility */
  }
  
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  .separator {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.15);
    height: 2px;
    margin: 10px auto;
  }
  
  .list-container {
    padding: 20px 0;
    width: 100%;
     /* Ensures proper alignment within the container */
    display: flex;
    flex-direction: column;
     /* Aligns list items vertically */
    align-items: center;
     /* Centers list items */
  }
  
  h1 {
    margin: 20px 0;
    font-size: 2rem;
     /* Ensures responsiveness */
    color: #333; 
    /* Better text visibility */
  }
  
  