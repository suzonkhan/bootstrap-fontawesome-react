# [Live URL](https://tourtoday-ecommerce.netlify.app/) 

## FontAwosome 

> npm i --save @fortawesome/fontawesome-svg-core\
> npm install --save @fortawesome/free-solid-svg-icons\
> npm install --save @fortawesome/free-brands-svg-icons\
> npm install --save @fortawesome/react-fontawesome

### Import Full collaction 
> import { fab } from '@fortawesome/> free-brands-svg-icons'\
> import { fas } from '@fortawesome/free-solid-svg-icons'\
> library.add(fab, fas)

### Usage:
> `<FontAwesomeIcon icon={['fas', 'coffee']} />`\
> `<FontAwesomeIcon icon={['fab', 'google']} />`

### Import specific element 
> import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

### Usage:
> `<FontAwesomeIcon icon={faCoffee} />`\
> `<FontAwesomeIcon icon={faCheckSquare} />`


## Bootstrap 

>npm install react-bootstrap bootstrap@5.1.3

**The following line can be included in your src/index.js or App.js file**
> import 'bootstrap/dist/css/bootstrap.min.css';

### Import into component
> import {Row, Col, Button } from 'react-bootstrap';

`<Row className="mx-0">`\
  `<Button as={Col} variant="primary">Button #1</Button>`\
  `<Button as={Col} variant="secondary" className="mx-2">Button #2</Button>`\
  `<Button as={Col} variant="success">Button #3</Button>`\
`</Row>`

## Hooks
> React hooks must be start with "use" keyword