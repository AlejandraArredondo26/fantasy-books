import { 
  IonPage, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent, 
  IonFab, 
  IonFabButton, 
  IonIcon, 
  IonModal, 
  IonButton, 
  IonInput, 
  IonItem, 
  IonLabel, 
  IonTextarea 
} from '@ionic/react';
import { add, close } from 'ionicons/icons';
import { useState, useEffect } from 'react';

export default function Explora() {
  const [showModal, setShowModal] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [libros, setLibros] = useState([]);

  // Cargar libros desde localStorage al iniciar
  useEffect(() => {
    const librosGuardados = localStorage.getItem("libros");
    if (librosGuardados) {
      setLibros(JSON.parse(librosGuardados));
    } else {
      // Libros iniciales por defecto
      setLibros([
        { titulo: "El Señor de los Anillos", autor: "J.R.R. Tolkien", descripcion: "Una de las sagas más épicas de la fantasía." },
        { titulo: "Harry Potter", autor: "J.K. Rowling", descripcion: "La historia de un joven mago que cambió el mundo literario." }
      ]);
    }
  }, []);

  // Guardar libros en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem("libros", JSON.stringify(libros));
  }, [libros]);

  const agregarLibro = () => {
    if (titulo && autor && descripcion) {
      const nuevoLibro = { titulo, autor, descripcion };
      setLibros([...libros, nuevoLibro]);
      setTitulo("");
      setAutor("");
      setDescripcion("");
      setShowModal(false);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Explora</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <h2>🌌 Explora el universo de la fantasía</h2>
        <p>Aquí encontrarás libros y sagas recomendadas por la comunidad de lectores.</p>

        {libros.map((libro, index) => (
          <IonCard key={index}>
            <IonCardHeader>
              <IonCardTitle>{libro.titulo}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p><strong>Autor:</strong> {libro.autor}</p>
              <p>{libro.descripcion}</p>
            </IonCardContent>
          </IonCard>
        ))}

        {/* FAB para agregar un nuevo libro */}
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton color="primary" onClick={() => setShowModal(true)}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>

        {/* Modal con formulario */}
        <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Agregar Libro</IonTitle>
              <IonButton slot="end" fill="clear" onClick={() => setShowModal(false)}>
                <IonIcon icon={close} />
              </IonButton>
            </IonToolbar>
          </IonHeader>

          <IonContent className="ion-padding">
            <IonItem>
              <IonLabel position="floating">Título</IonLabel>
              <IonInput value={titulo} onIonChange={e => setTitulo(e.detail.value || '')} />
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Autor</IonLabel>
              <IonInput value={autor} onIonChange={e => setAutor(e.detail.value || '')} />
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Descripción</IonLabel>
              <IonTextarea value={descripcion} onIonChange={e => setDescripcion(e.detail.value || '')} />
            </IonItem>

            <IonButton expand="block" className="ion-margin-top" onClick={agregarLibro}>
              Guardar Libro
            </IonButton>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
}
