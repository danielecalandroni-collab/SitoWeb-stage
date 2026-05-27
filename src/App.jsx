import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const pageTitle = "Lorem Ipsum Dolor";

  const menuList = [
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects#using_object_initializers
    { url: "#Lorem", label: "Lorem" },
    { url: "#Ipsum", label: "Ipsum" },
    { url: "#Dolor", label: "Dolor" },
    { url: "#SitAmet", label: "Sit Amet" }
  ];

  const sectionsArray = [
    { 
      sectionTitle: 'Lorem',
      sectionClass: 'contenitore1',
      doubleBox: new DoubleBox("Lorem Ipsum", "More", "Lorem Ipsum dolor sit amet bòa bla bla"),
      monoBox: new MonoBox("Lorem Dolor", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc turpis eros, rhoncus pellentesque libero ut, lacinia vulputate orci. Ut sapien mi, blandit a molestie eu, facilisis non arcu. Integer imperdiet neque ut pellentesque pharetra. Praesent vulputate quam in turpis volutpat dictum. Aenean justo arcu, fringilla rhoncus mauris in, tincidunt pulvinar lorem. Donec laoreet nibh ac tellus consectetur consectetur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla ullamcorper velit at luctus aliquam. Quisque lacus quam, convallis a bibendum at, vestibulum quis leo. Quisque vestibulum, felis nec varius dapibus, purus dui pharetra purus, vel porta magna eros et arcu. Morbi rutrum mauris eu neque faucibus viverra. Sed sed congue mi. Donec vel quam quis ante placerat ornare. Ut scelerisque tristique sem dapibus lobortis.")
    },
    { 
      sectionTitle: 'Ipsum',
      sectionClass: 'contenitore2',
      doubleBox: new DoubleBox("Lorem Ipsum", "More", "Lorem Ipsum dolor sit amet bòa bla bla"),
      monoBox: new MonoBox("Lorem Dolor", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc turpis eros, rhoncus pellentesque libero ut, lacinia vulputate orci. Ut sapien mi, blandit a molestie eu, facilisis non arcu. Integer imperdiet neque ut pellentesque pharetra. Praesent vulputate quam in turpis volutpat dictum. Aenean justo arcu, fringilla rhoncus mauris in, tincidunt pulvinar lorem. Donec laoreet nibh ac tellus consectetur consectetur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla ullamcorper velit at luctus aliquam. Quisque lacus quam, convallis a bibendum at, vestibulum quis leo. Quisque vestibulum, felis nec varius dapibus, purus dui pharetra purus, vel porta magna eros et arcu. Morbi rutrum mauris eu neque faucibus viverra. Sed sed congue mi. Donec vel quam quis ante placerat ornare. Ut scelerisque tristique sem dapibus lobortis.")
    },
    { 
      sectionTitle: 'Dolor Sit',
      sectionClass: 'contenitore3',
      doubleBox: new DoubleBox("Lorem Ipsum", "More", "Lorem Ipsum dolor sit amet bòa bla bla"),
      monoBox: new MonoBox("Lorem Dolor", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc turpis eros, rhoncus pellentesque libero ut, lacinia vulputate orci. Ut sapien mi, blandit a molestie eu, facilisis non arcu. Integer imperdiet neque ut pellentesque pharetra. Praesent vulputate quam in turpis volutpat dictum. Aenean justo arcu, fringilla rhoncus mauris in, tincidunt pulvinar lorem. Donec laoreet nibh ac tellus consectetur consectetur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla ullamcorper velit at luctus aliquam. Quisque lacus quam, convallis a bibendum at, vestibulum quis leo. Quisque vestibulum, felis nec varius dapibus, purus dui pharetra purus, vel porta magna eros et arcu. Morbi rutrum mauris eu neque faucibus viverra. Sed sed congue mi. Donec vel quam quis ante placerat ornare. Ut scelerisque tristique sem dapibus lobortis.")
    }
  ]

  function DoubleBox(a, b, c) {
    this.title = a;    
    this.buttonLabel = b;
    this.underText = c;
  }

  function MonoBox(a, b) {
    this.title = a;    
    this.text = b;
  }

  return (
    <>
      <header>
        <img src="logo.png" alt="Logo" />
          <Navbar menu={menuList}/>
      </header>

      <main>
        <div className='hero'>test</div>
        {/* sto ciclando l'array delle sezioni */}
        {sectionsArray.map((s, index) => (
          <Section title={s.sectionTitle} classes={s.sectionClass} dBox={s.doubleBox} mBox={s.monoBox} index={index}/>
        ))}
      </main>
      {/* <Hero title={pageTitle}/>
       */}
       <footer>

       </footer>
    </>
  )

}
function Navbar ({menu}) {
  return (
    <nav>
      <ul>
        {menu.map((menuItem, index) => (
          <li className='pippopluto' key={index}>
            <a href={menuItem.url}>{menuItem.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

/**
 * @param {String} title 
 * @param {DoubleBox} dBox 
 * @param {MonoBox} mBox
 * @returns 
 */
function Section({title, classes, dBox, mBox, index}) {
  return (<>
    <h2>{title}</h2>
    {/* <section className={"section__wrapper section--"+(index+1)} key={index}> */}
    <section className={classes +" "+(index%2 !== 0 ? "orizinv" : "oriz")} key={index}>
      <DBoxElem title={dBox.title} buttonLabel={dBox.buttonLabel} underText={dBox.underText} />
      <MBoxElem title={mBox.title} text={mBox.text}/>
     </section>
    </>
  )
}
/**
 *  <h2>Lorem</h2>
    <section class="spazio oriz">
        
    </section> 
 */

// function for building the DoubleBox Html
function DBoxElem({title, buttonLabel, underText}) {
  return (<>
    <div className='mask'>
      <div className='frontlayer'>
        <h3>{title}</h3>
        <button>{buttonLabel}</button>
      </div>
      <div className='backlayer'>
        <p>{underText}</p>
      </div>
    </div>
  </>)
}
/**
 *  <div class="mask">
      <div class=" contenitore1 frontground">
          <h3>Titolo</h3>
          <button class="bottone">More</button>
      </div>
      <div class=" contenitore1 background">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
      </div>
    </div>
 */


/**
 * 
 * @param {*} title 
 * @param {*} text 
 * @returns 
 */

// function for building the MonoBox Html
function MBoxElem({title, text}) {
    return (
    <div className='mask'>
      <div className='monolayer'>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}
/**
 * <div class="mask">
      <div class="padding">
        <h3 class="ciao classh3">Donec sit amet auctor tortor</h3>
        <p>Lorem ipsum dolor, consectetur adipiscing elit. Maecenasùerat, elementu...</p>
      </div>
    </div>
 */
export default App
