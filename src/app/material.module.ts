import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import{
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatCheckboxModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    
}from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
@NgModule({
    imports:[
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        BrowserAnimationsModule,MatButtonModule, MatCheckboxModule, 
        LayoutModule, MatToolbarModule, MatIconModule, 
        MatListModule, MatGridListModule, MatCardModule, MatMenuModule
    ],
    exports:[
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        BrowserAnimationsModule,MatButtonModule, MatCheckboxModule, 
        LayoutModule, MatToolbarModule, MatIconModule, 
        MatListModule, MatGridListModule, MatCardModule, MatMenuModule       
    ]
})
export class MaterialModule{}