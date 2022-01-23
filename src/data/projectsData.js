import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'Stock Heist',
        projectDesc: 'This project helps you filter today\'s stock updates, ' +
            'you can also find out the true intrinsic value of stocks, ' +
            'the data source for this project is taken from Yahoo Finance API',
        tags: ['Laravel', 'MySQL', 'REST API'],
        code: 'https://github.com/tegarsubkhan236/kafalafi',
        demo: 'http://stockheist.herokuapp.com/',
        image: one
    },
    {
        id: 2,
        projectName: 'Lumbung Indonesia',
        projectDesc: '',
        tags: ['Laravel', 'MySQL'],
        code: 'https://github.com/tegarsubkhan236/laravel_inventory',
        demo: 'https://lumbungindonesia.herokuapp.com/',
        image: two
    },
    {
        id: 3,
        projectName: 'Fordas',
        projectDesc: '',
        tags: ['Laravel', 'MySQL'],
        code: 'https://github.com/tegarsubkhan236/kafalafi',
        demo: 'https://fordas.herokuapp.com/',
        image: three
    },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/