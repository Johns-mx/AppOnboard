import React from 'react'
import Colors from "../constants/Colors";
import { MaterialCommunityIcons, FontAwesome5, MaterialIcons, FontAwesome } from "@expo/vector-icons";

export default [
    {
        id: 1,
        title: 'Accesibilidad',
        data: ["Ajusta la app a tu preferencia"],
        icon: <FontAwesome5 name="user-lock" size={20} color={Colors.WHITE.onceavo} />,
        screenName: "Accesibilidad"
    },
    {
        id: 2,
        title: 'Privacidad y Seguridad',
        data: ["Ajusta el grado de privacidad"],
        icon: <FontAwesome5 name="lock" size={22} color={Colors.WHITE.onceavo} />,
        screenName: "Privacidad"
    },
    {
        id: 3,
        title: "Notificaciones y Sonidos",
        data: ["Ajustar notificaciones"],
        icon: <MaterialCommunityIcons name="bell-check" size={25} color={Colors.WHITE.onceavo} />,
        screenName: "NotificacionesSettings"
    },
    {
        id: 4,
        title: "Datos y Almacenamiento",
        data: ["Visualizar tamaño de mi cuenta"],
        icon: <FontAwesome name="pie-chart" size={22} color={Colors.WHITE.onceavo} />,
        screenName: "Storage"
    },
    {
        id: 5,
        title: "Idioma",
        data: ["Cambiar idioma"],
        icon: <FontAwesome name="language" size={23} color={Colors.WHITE.onceavo} />,
        screenName: "Language"
    },
    {
        id: 6,
        title: "Apariencia",
        data: ["Cambiar a modo oscuro o claro"],
        icon: <MaterialIcons name="settings-display" size={23} color={Colors.WHITE.onceavo} />,
        screenName: "Apariencia"
    },
    {
        id: 7,
        title: "Ayuda y Comentarios",
        data: ["Info de la app,", "  Politicas"],
        icon: <MaterialCommunityIcons name="help-circle" size={25} color={Colors.WHITE.onceavo} />,
        screenName: "Help"
    },
];