import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WhiteWidgetComponent } from './components/white-widget/white-widget.component';
import { HeaderComponent } from './header/header.component';
import { LeftSideComponent } from './left-side/left-side.component';
import { RightSideComponent } from './right-side/right-side.component';
import { MenuComponent } from './components/menu/menu.component';
import { StartPageComponent } from './start-page/start-page.component';
import { TableComponent } from './components/table/table.component';
import { productTableComponent } from './components/productTable/table.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { EmployerlistComponent } from './employerlist/employerlist.component';
import { productlistComponent } from './productlist/productlist.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterEmployeComponent } from './register-employe/register-employe.component';
import { RegisterProductComponent } from './register-product/register-product.component';
import { ContentComponent } from './content/content.component';
import { promolistComponent } from './promotions/promolist/promolist.component';
import { RegisterPromoComponent } from './promotions/register-promo/register-promo.component';
import { promoTableComponent } from './components/promoTable/table.component';
import { EditPromoComponent } from './promotions/edit-promo/edit-promo.component';

import { consoleTableComponent } from './components/consoleTable/table.component';
import { consolelistComponent } from './consoles/consolelist/consolelist.component';
import { RegisterConsoleComponent } from './consoles/register-console/register-console.component';
import { EditConsoleComponent } from './consoles/edit-console/edit-console.component';
import { ButtonComponent } from './components/button/button.component';
import { TimerComponent } from './components/timer/timer.component';
import { SelectBoxComponent } from './components/select-box/select-box.component';
import { SingleComputerComponent } from './single-computer/single-computer.component';


@NgModule({
  declarations: [
    AppComponent,
    WhiteWidgetComponent,
    HeaderComponent,
    LeftSideComponent,
    RightSideComponent,
    MenuComponent,
    StartPageComponent,
    TableComponent,
    CalendarComponent,
    EmployerlistComponent,
    FooterComponent,
    RegisterEmployeComponent,
    ContentComponent,
    productlistComponent,
    productTableComponent,
    RegisterProductComponent,
    promolistComponent,
    RegisterPromoComponent,
    promoTableComponent,
    EditPromoComponent,
    consoleTableComponent,
    consolelistComponent,
    RegisterConsoleComponent,
    EditConsoleComponent,
    ButtonComponent,
    TimerComponent,
    SelectBoxComponent,
    SingleComputerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
