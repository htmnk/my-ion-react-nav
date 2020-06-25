import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonIcon, IonLabel } from '@ionic/react';

import React, { useState } from 'react';
import './Home.css';
import techs from '../techs';
import IonReactNav from '../components/IonReactNav';
import TechDetail from '../components/TechDetail';
import { IonReactRouter } from '@ionic/react-router';

const Home: React.FC = () => {
  const [tech, setTech] = useState(techs[0])

  return (
    <IonPage>
      <IonReactRouter>
        <IonReactNav detail={() => <TechDetail {...tech} />}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Nav</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
            <IonHeader collapse="condense">
              <IonToolbar>
                <IonTitle size="large">Nav</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonList>
              {techs.map((tech, i) => {
                return (
                  <IonItem button className="ion-react-nav-detail-btn" key={i} onClick={() => setTech(techs[i])}>
                    <IonIcon slot="start" icon={tech.icon} style={{ color: `${tech.color}` }} />
                    <IonLabel>
                      <h3>{tech.title}</h3>
                    </IonLabel>
                  </IonItem>
                )
              })}
            </IonList>
          </IonContent>
        </IonReactNav>
      </IonReactRouter>
    </IonPage>
  );
};

export default Home;
