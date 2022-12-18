# React Fade Modal
<img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/react-fade-modal"> <img alt="Snyk Vulnerabilities for npm package" src="https://img.shields.io/snyk/vulnerabilities/npm/react-fade-modal">

Responsive react modal with fade in-out effect included without any external libraries.

## Motivation
Most famous react modals refers to real DOM. <br/>
This modal is 100% purely made using virtual DOM instead.
<br/>
Also, you can customize the UI based on your needs without worrying about css conflicts, 
thanks to the `:where` css pseudo-class and `module.css`. 
<br/>
Not less important, [extreme small size](https://bundlephobia.com/package/react-fade-modal). <br/>

## Getting Started

You can install the module via `npm` or `yarn`:

```sh
npm install react-fade-modal
```

```sh
yarn add react-fade-modal
```

## Demo
[Live Demo](https://react-fade-modal-demo.surge.sh/)

## Usage
### Basic example
```js
import {Modal} from 'react-fade-modal'

function App() {
    const [isOpen, setIsOpen] = useState(false)
    return (
       <div>
           <p>
               <div>Basic example</div>
               <button onClick={() => setIsOpen(true)}>click to open modal</button>
               {isOpen &&
                   <Modal
                       title={"Title"}
                       setIsOpen={setIsOpen}>
                       <div>
                           <p>Modal content.</p>
                       </div>
                   </Modal>
               }
           </p>      
       </div>
    );
}
```
Note that `Modal` does not accept an `isOpen` prop. You must put the component into 
a conditional wrap, so it will be unmounted and mounted every time the condition change.

### ModalProvider Example
Sometimes, `Modal` does not render well when you are using in a complex nested DOM component.

In this case, it's better to use `ModalProvider` in order to ensure that the `Modal`
is on top of the DOM and the graphic does not change:

```js
import {ModalProvider} from 'react-fade-modal'

function App() {
    return (
        <ModalProvider>
            <Panel/>
        </ModalProvider>
    );
}
```
In this example, `App.js` render `<Panel/>` only. Let's call `useModalContext`:
```js
import {useModalContext} from 'react-fade-modal'

const Panel = () => {
    const {showModal} = useModalContext()
    return <p>
        {items.map(item =>
            <Button onClick={() => {
                showModal({
                    title: 'Custom title',
                    children: <div>You can pass any component. This is the Item {item}</div>,
                    closeOnClickOutside: false
                })
            }}>
                item {item}
            </Button>)}
    </p>
}
```
Note that I could also call the `context` inside any child of `<Panel/>`,
that's how the `context` work basically.

`showModal` is a function that accept any `Modal` props. 
You can pass props as object properties as shown in the example above.

More examples available on `demo/src/App.tsx`

## Props

|Name|Type|Default|Description|
|:--|:--:|:-----:|:----------|
|**setIsOpen**|<code>Function</code>|`required`|Show the modal. Accept 1 boolean value|
|**transitionDurationInMs**|<code>number</code>|200|Transition duration in milliseconds. Used for fade in-out the Modal|
|**title**|<code>string</code>|`''`|Title of the Modal|
|**children**|<code>ReactNode</code>|`undefined`|Any JSX Component|
|**closeOnClickOutside**|<code>boolean</code>|`true`|If true, the Modal will closed when you click outside|
|**containerCss**|<code>string</code>|`''`|Optional CSS Classes applied to Modal container. A grey background layer will be shown as default|
|**modalCss**|<code>string</code>|`''`|Optional CSS classes applied to the Modal itself|
|**modalStyle**|<code>CSSProperties</code>|`{}`|Optional `style` applied to the Modal itself|
|**titleCss**|<code>string</code>|`''`|Optional CSS classes applied to the title|
|**contentCss**|<code>string</code>|`''`|Optional CSS classes applied to the children|
|**closeIconCss**|<code>string</code>|`''`|Optional CSS classes applied to the close icon|
|**showCloseIcon**|<code>boolean</code>|`true`|If true, it will be rendered the default close icon|
|**customCloseIcon**|<code>ReactElement</code>|`undefined`|If not undefined, this component will be rendered instead of the default close icon|

<br/>

## No CSS Conflicts
Every css classes used in this component are written into `module.css` file and
wrapped into `:where` pseudo-class, which gives them 0 specificity,
so you can override current css properties through your custom css classes.
<br/>
More about [:where pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:where)
<br/>
More about [css modules](https://developer.mozilla.org/en-US/docs/Web/CSS/:where)

## Project Structure
The project includes a demo folder initialized with Create React App.

When you run the command ```build``` from first-level ```package.json```, a ```dist``` and a ```lib``` folder will be generated.

The ```lib``` folder will be placed automatically into the demo project.

You can move into ```demo``` directory and ```start``` project from its own package.json script, just like any other Create React App.

## Questions
**🐛 Did you find any bugs? Cool!**
<br/>
Report it in "issues" section under the label "bug" and I'll check it.

**🚀 Do you have any questions or feature request? Nice!** <br/>
Write it into "issues" section under the label "enhancement" and I'll check it.

**⭐ Did you find this package useful and meet your requirements? Great!** <br/>
Consider to put a ⭐ into the GitHub project!

## License
MIT
