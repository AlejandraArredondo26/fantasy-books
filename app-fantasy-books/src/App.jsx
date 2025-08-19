import {
  IonApp,
  IonSplitPane,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonRouterOutlet,
  setupIonicReact
} from '@ionic/react';

import { Routes, Route, Navigate } from 'react-router-dom';

/* Core CSS */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/palettes/dark.system.css';

import Tabs from './pages/Tabs';
import Contacto from './pages/Contacto';

setupIonicReact();

export default function App() {
  return (
    <IonApp>
      <IonSplitPane contentId="main-content">
        <IonMenu contentId="main-content">
          <IonHeader>
            <IonToolbar>
              <IonTitle>📚 Fantasía</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              <IonItem routerLink="/tabs/bienvenida" routerDirection="none">Inicio</IonItem>
              <IonItem routerLink="/tabs/explora" routerDirection="none">Explora</IonItem>
              <IonItem routerLink="/tabs/autores" routerDirection="none">Autores</IonItem>
              <IonItem routerLink="/tabs/libros" routerDirection="none">Libros</IonItem>
              <IonItem routerLink="/tabs/comentarios" routerDirection="none">Comentarios</IonItem>
              <IonItem routerLink="/tabs/acerca" routerDirection="none">Acerca</IonItem>
            </IonList>
          </IonContent>
        </IonMenu>

        <IonRouterOutlet id="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/tabs/bienvenida" />} />
            <Route path="/tabs/*" element={<Tabs />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonApp>
  );
}
