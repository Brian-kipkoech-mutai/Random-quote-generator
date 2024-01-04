



 const QuotePage=({handleclick,quote})=>{
  const quotes = [
    ["The only way to do great work is to love what you do.", "Steve Jobs"],
    ["Believe you can and you're halfway there.", "Theodore Roosevelt"],
    ["The future belongs to those who believe in the beauty of their dreams.", "Eleanor Roosevelt"],
    ["Strive not to be a success, but rather to be of value.", "Albert Einstein"],
    ["The best way to predict the future is to create it.", "Peter Drucker"],
    ["The only limit to our realization of tomorrow will be our doubts of today.", "Franklin D. Roosevelt"],
    ["You are never too old to set another goal or to dream a new dream.", "C.S. Lewis"],
    ["Success is not final, failure is not fatal: It is the courage to continue that counts.", "Winston Churchill"],
    ["It does not matter how slowly you go as long as you do not stop.", "Confucius"],
    ["If you want to lift yourself up, lift up someone else.", "Booker T. Washington"],
    ["The best revenge is massive success.", "Frank Sinatra"],
    ["In the middle of every difficulty lies opportunity.", "Albert Einstein"],
    ["You miss 100% of the shots you don't take.", "Wayne Gretzky"],
    ["Life is 10% what happens to us and 90% how we react to it.", "Charles R. Swindoll"],
    ["The only source of knowledge is experience.", "Albert Einstein"],
    ["A person who never made a mistake never tried anything new.", "Albert Einstein"],
    ["Don't watch the clock; do what it does. Keep going.", "Sam Levenson"],
    ["If you're going through hell, keep going.", "Winston Churchill"],
    ["The greatest glory in living lies not in never falling, but in rising every time we fall.", "Nelson Mandela"],
    ["Change your thoughts and you change your world.", "Norman Vincent Peale"]
  ]
    const  colors=  [
      '#FF6B6B',
      '#6B5B95',
      '#88B04B',
      '#F7CAC9',
      '#92A8D1',
      '#955251',
      '#B565A7',
      '#009B77',
      '#DD4124',
      '#D65076',
      '#45B8AC',
      '#EFC050',
      '#9B2335',
      '#8F4B4B',
      '#507255',
      '#FFD662',
      '#96CDCD',
      '#F49AC2',
      '#B3B3B3',
      '#4C3B4D'
    ];
    
  
    return(
        <div id='outer-div' style={{backgroundColor:colors[quote]}}>
<div id="quote-box" >


 <h1 id="text"   style={{color:colors[quote]}}> {quotes[quote][0]} </h1>
  <p id="author" style={{color:colors[quote ]}}> - <i>{quotes[quote][1]}</i></p>

 
  
  <div id="buttons">
  <a
  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `${quotes[quote][0]}   - ${quotes[quote][1]}`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  id="tweet-quote"
  style={{ background: colors[quote] }}
> Tweet</a>
   <button id="new-quote" onClick={handleclick} style={{background:colors[quote]}}>new quote</button>

  </div>
   
</div>

<div  className="developer"> Design and coded by <a href="https://www.linkedin.com/in/brian-kipkoech-71b5b9248?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9nnAF3gTQq2oeiliYkWdyA%3D%3D">Brian kipkoech</a></div>

        </div>
    )
 }
   
 export default QuotePage