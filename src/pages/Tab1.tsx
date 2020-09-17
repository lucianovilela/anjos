import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
  IonInput,
  IonText,
  IonDatetime
} from "@ionic/react";

//import ExploreContainer from '../components/ExploreContainer';
import "./Tab1.css";
import { useState } from "react";
import { DB } from "../db/db";
import { getSalmos } from "../db/salmos";

const Tab1: React.FC = () => {
  const [result, setResult] = useState<[]>([]);
  const handleChange = value => {
    let date = new Date(value);
    let valor =
      (date.getDate() + "").padStart(2, "0") +
      "/" +
      (date.getMonth() + 1 + "").padStart(2, "0");
    console.debug(valor);
    setResult(
      DB.filter(anjo => {
        return anjo.DN.includes(valor);
      })
    );
  };

  const itens = result.map(i => (
    <IonItem>
      <IonLabel>
        <IonText color="primary">
          <h1>{i.ANJO}</h1>
        </IonText>
        <IonText color="secondary">
          <h2>Qualidade:{i.QUALIDADE}</h2>
        </IonText>
        <IonText color="medium">
          <p>Principe:{i.PRINCIPE}</p>
        </IonText>
        <IonLabel>
          <pre>
            {i.SALMO.split(",").map(id => (
              <IonText>{getSalmos(id * 1).texto}</IonText>
            ))}
          </pre>
        </IonLabel>
      </IonLabel>
    </IonItem>
  ));

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Anjos</IonTitle>
          <IonDatetime
            displayFormat="DD/MMMM"
            //value={text}
            placeholder="Dia/Mes"
            onIonChange={e => handleChange(e.detail.value)}
          />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Anjos</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>{itens}</IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
