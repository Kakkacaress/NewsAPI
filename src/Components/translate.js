import React from "react"


 googleTranslateElementInit = () => {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}


 <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

const Translate = () => {
    return (
      <div>
        <h1>My Web Page</h1>

        <p>Hello everybody!</p>

        <p>Translate this page:</p>

        <div id="google_translate_element"></div>
      </div>
    );
}

export default Translate;




