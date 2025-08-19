import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
  IonRouterOutlet
} from '@ionic/react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Bienvenida from './Bienvenida';
import Explora from './Explora';
import Autores from './Autores';
import Libros from './Libros';
import Comentarios from './Comentarios';
import Acerca from './Acerca';

import { home, planet, book, people, chatbubbles, informationCircle } from 'ionicons/icons';

export default function Tabs() {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Routes>
          <Route path="bienvenida" element={<Bienvenida />} />
          <Route path="explora" element={<Explora />} />
          <Route path="autores" element={<Autores />} />
          <Route path="libros" element={<Libros />} />
          <Route path="comentarios" element={<Comentarios />} />
          <Route path="acerca" element={<Acerca />} />
          <Route path="*" element={<Navigate to="bienvenida" />} />
        </Routes>
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="bienvenida" href="/tabs/bienvenida">
          <IonIcon icon={home} />
          <IonLabel>Inicio</IonLabel>
        </IonTabButton>

        <IonTabButton tab="explora" href="/tabs/explora">
          <IonIcon icon={planet} />
          <IonLabel>Explora</IonLabel>
        </IonTabButton>

        <IonTabButton tab="autores" href="/tabs/autores">
          <IonIcon icon={people} />
          <IonLabel>Autores</IonLabel>
        </IonTabButton>

        <IonTabButton tab="libros" href="/tabs/libros">
          <IonIcon icon={book} />
          <IonLabel>Libros</IonLabel>
        </IonTabButton>

        <IonTabButton tab="comentarios" href="/tabs/comentarios">
          <IonIcon icon={chatbubbles} />
          <IonLabel>Comentarios</IonLabel>
        </IonTabButton>

        <IonTabButton tab="acerca" href="/tabs/acerca">
          <IonIcon icon={informationCircle} />
          <IonLabel>Acerca</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
}
