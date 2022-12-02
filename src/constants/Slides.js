//import Svg, {Path, Defs, Stop} from 'react-native-svg'
import GradientButton from '../components/GradientButton';
import React from 'react';

export default [
    {
        id: 1,
        titulo: "Programming Tips",
        descripcion: "Pro tips for Software Developers.",
        image: require('../assets/undraw_Programming_re_kg9v.png')
    },
    {
        id: 2,
        titulo: "Working Comfortable",
        descripcion: "Program in places where you feel comfortable.",
        image: require('../assets/undraw_Mobile_development_re_wwsn.png')
    },
    {
        id: 3,
        titulo: "Read to Meditate",
        descripcion: "Space for you to relax and reflect on reading.",
        image: require('../assets/undraw_Reading_time_re_phf7.png')
    },
    {
        id: 4,
        titulo: "In the office",
        descripcion: "Space for you to relax and reflect on reading.",
        image: require('../assets/undraw_In_the_office_re_jtgc.png')
    }
]

//<GradientButton onPress={() => navigation.navigate('Login')} />