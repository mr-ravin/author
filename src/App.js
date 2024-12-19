import bookcover from "./The Engineer's Plan.jpg";
import book from "./Book- The Engineer's Plan.pdf";
import './App.css';

function App() {
    return (
      <div class="middle">
         <img src={bookcover} style={{ width: '100%', maxWidth: '100%' }} />
         <p align="justify">
         <i><b>Book Name</b>: The Engineer's Plan</i>
         <br/>
         <i><b>Author</b>: </i><a href="https://mr-ravin.github.io"><i>Ravin Kumar</i></a>
         </p>
         <p align="justify">
  This book is written to provide engineering students and aspiring candidates with relevant information, tricks, tactics, and strategies to optimally achieve their goals. For the students targeting employment in the engineering sector, this book also discusses how to publish a research paper, copyright a computer software, and the entire process of filing a patent in India.
  <br/><br/>
       &emsp; It also mentions optimal steps for candidates planning to go into non-engineering focussed employment such as public sector services, academics, and business administration.
  <br/><br/>
      &emsp; One of the purposes of this book is to make candidates question their thoughts and help them strategise on developing a plan to achieve their end goals.
  </p>

    <i><b>Available on</b>: 1. <a href="https://www.amazon.in/dp/1636405118" target="_blank" rel="noreferrer">Amazon India</a>  2. <a href="https://www.flipkart.com/the-engineers-plan/p/itm923e0c945ddf5" target="_blank" rel="noreferrer">Flipkart</a>  3. <a href="https://store.whitefalconpublishing.com/products/the-engineer-s-plan" target="_blank" rel="noreferrer">WFP Store</a> 4. <a href="https://archive.org/details/the-engineers-plan" target="_blank" rel="noreferrer">Archive.org</a> 5. <a href="https://mr-ravin.github.io/author/static/media/Book-%20The%20Engineer's%20Plan.889c5c775cf5293ac1d7.pdf" target="_blank" rel="noreferrer">Github</a> 6. <a href="https://www.researchgate.net/publication/359859086_The_Engineer's_Plan" target="_blank" rel="noreferrer">Research Gate</a> 7. <a href="https://ssrn.com/abstract=4992929" target="_blank" rel="noreferrer"> SSRN</a> 8. <a href="https://drive.google.com/drive/folders/1ayJX5Go0tlubOfR9pZJjFSnoeXThmgtG?usp=sharing" target="_blank" rel="noreferrer">Google Drive</a></i>
    </div>
    );
}

export default App;
