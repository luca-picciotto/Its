import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CorsiComponent } from './corsi/corsi.component';
import { AmministrazioneComponent } from './amministrazione/amministrazione.component';
import { HomeComponent } from './home/home.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';

export const routes: Routes = [
    {path: 'lista-corsi', component: CorsiComponent},
    {path: 'amministrazione', component: AmministrazioneComponent},
    {path: 'home', component: HomeComponent},
    {path: 'chi-siamo', component: ChiSiamoComponent}


];
