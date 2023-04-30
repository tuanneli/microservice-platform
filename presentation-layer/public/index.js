import 'systemjs'

console.log(1, "Hello there world @")

System.import('/').then(({ mount, unmount, component }) => ({ mount, unmount, component }))


mount(component, document.getElementById('main'))
