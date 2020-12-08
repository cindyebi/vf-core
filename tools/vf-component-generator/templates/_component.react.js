// <%= componentName %> for React
// See vf-extensions-react for usage guidance
// We use vanilla JS templates for react for compaitbility with create react app
// ---
import React from 'react';
import vfNunjucks from '@visual-framework/vf-extensions-react/assets/nunjucks-slim.js';
import <%= componentNameReact %>Template from "raw-loader!./<%= componentName %>.precompiled.js"; // https://webpack.js.org/loaders/raw-loader/
eval(<%= componentNameReact %>Template); // we use eval as we specifically want to run a known template

// any JS actions needed on component insertion
class <%= componentNameReact %>Callback extends React.Component {
  componentDidMount() {
    console.log('any JS actions needed')
  }

  render() {
    return React.createElement("div", null);
  }
}

const <%= componentNameReact %> = React.memo(({
  variant, newTheme, card_image, card_text, card_image__alt, card_title 
  }) => {
    // our HTML is handled by nunjucks, this should not receive user input
    return React.createElement("div", null, 
      React.createElement("div", {
        dangerouslySetInnerHTML: {
          // our HTML is handled by nunjucks, this should not receive user input
          __html: vfNunjucks.render('<%= componentName %>', {
            variant: variant, newTheme: newTheme, card_image: card_image, card_text: card_text, card_image__alt: card_image__alt, card_title: card_title 
          })
        }
      }),
      React.createElement(<%= componentNameReact %>Callback, null)
    );
  }
); 

export { <%= componentNameReact %> };
