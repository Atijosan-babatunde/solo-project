import './App.css';
import Navbar from './components/Navbar/index';
import Content from './components/Content';
import firstpic from './components/Images/firstpic.png'
import secondpic from './components/Images/secondpic.png'
import last from './components/Images/last.png'

function App() {
   const Contents = ([
      {
        photo: firstpic,
        location:"JAPAN",
        country:"Mount Fuji",
        date:"12 Jan, 2021 - 24 Jan, 2021",
        details:"Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
      },
      {
        photo: secondpic,
        location:"AUSTRALIA",
        country:"Sydney Opera House",
        date:"27 May, 2021 - 8 Jun, 2021",
        details:"The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings"
      },
      {
        photo: last,
        location:"NORWAY",
        country:"Geirangerfjord",
        date:"01 Oct, 2021 - 18 Nov, 2021",
        details:"The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
      }
   ])
  return (
    <div>
       <Navbar />
       {Contents.map((ContentData)=>{
        return(
          <Content 
             {...ContentData}
          />
        )
       })}
    </div>
  );
}

export default App;
