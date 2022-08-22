
//modulo de ruteo creado  manualmente

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PorCapitalComponent } from "./pais/pages/por-capital/por-capital.component";
import { PorPaisComponent } from "./pais/pages/por-pais/por-pais.component";
import { PorRegionComponent } from "./pais/pages/por-region/por-region.component";
import { VerPaisComponent } from "./pais/pages/ver-pais/ver-pais.component";

//importar Routes

const routes: Routes =[
    {
        path:'',
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: PorRegionComponent
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        path: 'pais/:id',
        component: VerPaisComponent
    },
    //según aquí se pone la excepción
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot( routes ) //routes es el nombre del arreglo de clases de las rutas en la parte de arriba

    ],
    exports:[
        RouterModule
    ]
})


export class AppRoutingModule{}