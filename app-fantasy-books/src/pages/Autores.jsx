import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonContent,
  IonAccordionGroup,
  IonAccordion,
  IonItem,
  IonLabel
} from '@ionic/react';

export default function Autores() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Autores de Fantasía</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonAccordionGroup>
          <IonAccordion value="tolkien">
            <IonItem slot="header">
              <IonLabel>J.R.R. Tolkien</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              Autor de El Señor de los Anillos y El Hobbit. Considerado el padre de la fantasía moderna.
            </div>
          </IonAccordion>

          <IonAccordion value="rowling">
            <IonItem slot="header">
              <IonLabel>J.K. Rowling</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              Creadora de la saga Harry Potter, que revolucionó la literatura juvenil fantástica.
            </div>
          </IonAccordion>

          <IonAccordion value="martin">
            <IonItem slot="header">
              <IonLabel>George R.R. Martin</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              Escritor de Canción de Hielo y Fuego, que inspiró la serie Game of Thrones.
            </div>
          </IonAccordion>

          <IonAccordion value="lewis">
            <IonItem slot="header">
              <IonLabel>C.S. Lewis</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              Autor de Las Crónicas de Narnia, una obra clásica de aventuras fantásticas.
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonContent>
    </IonPage>
  );
}
