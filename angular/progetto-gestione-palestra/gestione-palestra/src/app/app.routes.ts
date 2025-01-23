import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CorsiComponent } from './corsi/corsi.component';
import { AmministrazioneComponent } from './amministrazione/amministrazione.component';

export const routes: Routes = [
    {path: 'lista-corsi', component: CorsiComponent},
    {path: 'amministrazione', component: AmministrazioneComponent},
];
