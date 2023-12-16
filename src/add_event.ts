import './style.css'
import { Event } from "./event.ts";
import { EventService } from "./main.ts";


window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
  e.returnValue = "Az esemény létrehozása meg fog szakadni";
});

document.addEventListener("DOMContentLoaded", () => {
  const eventCreate = document.getElementById("eventCreate") as HTMLFormElement;
  const errorMessage = document.getElementById("errorMessage");
  eventCreate!.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputTitle: string = (document.getElementById("title") as HTMLInputElement).value;
    const inputDescription: string = (document.getElementById("description") as HTMLInputElement).value;
    const inputLocation: string = (document.getElementById("location") as HTMLInputElement).value;
    const inputInvited: string = (document.getElementById("invited") as HTMLInputElement).value;
    const inputDate: Date | null = ((document.getElementById("date") as HTMLInputElement)).valueAsDate;
    const inputRepetition: boolean = (document.getElementById("iterance") as HTMLInputElement).checked;

    try {
      const newEvent: Event = new Event(inputTitle, inputDescription, inputLocation, inputInvited, inputDate, inputRepetition);
      const eventService = new EventService();
      eventService.add(newEvent);

      window.alert("Esemény sikeresen létrehozva!");
      window.location.href = "./index.html";
    } catch(e) {
      if (e instanceof Error) {
        errorMessage!.textContent = e.message;
      }
    }
  });
});