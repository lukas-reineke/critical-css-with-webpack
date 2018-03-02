import './style.critical.css';

// load lazy styles whenever you want
setTimeout(() => import('./style.lazy.css').then(({ default: style }) => {

    const element = document.createElement('style');
    element.appendChild(document.createTextNode(style));
    document.head.appendChild(element);

}), 2000);

