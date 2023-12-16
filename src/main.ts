import './style.css'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import EventInterface from '../Interfaces/event_interface.ts'
import { EventInterfaceDTO } from '../Interfaces/event_interfaceDTO.ts'

//https://retoolapi.dev/yrG9At/Calendar_project  !!! API LINK !!!

export class EventService {
  api_url = "https://retoolapi.dev/yrG9At/Calendar_project";

  async add(event: EventInterfaceDTO): Promise<EventInterface> {
      const response = await fetch(this.api_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(event),
      });
      if (!response.ok) {
        throw new Error("Nem sikerült új eseményt hozzáadni!");
      }
      return response.json();
  }
  
  async getAll(): Promise<EventInterface[]> {
    const response = await fetch(this.api_url, {
      headers: { Accept: "application/json" },
    });
    if (!response.ok) {
      throw new Error("Nem sikerült kilistázni az eseményeket!");
    }
    return response.json();
  }
}

