import  { EventInterfaceDTO }  from "../Interfaces/event_interfaceDTO.ts";

export class Event implements EventInterfaceDTO {
    public title: string;
    public description: string;
    public location: string;
    public invited: string;
    public date: Date;
    public repetiton: boolean;

    constructor(title: string, description: string, location: string,
        invited: string, date: Date | null, repetition: boolean) {
        
        if (title.trim() == "") {
            throw new Error("Az eseménynek nevet adni kötelező!!");
        } else if (description.trim() == "") {
            throw new Error("Az eseménynek leírást adni kötelező!");
        } else if (location.trim() == "") {
            throw new Error("Az eseménynek helyszínt adni kötelező!");
        } else if (invited.trim() == "") {
            throw new Error("A meghívottak listáját kötelező megadni! (Ha nincs meghívott, csak jelölje egy '-' karakterrel)");
        } else if (date == null) {
            throw new Error("A dátum nem lehet üres!");
        } else {
            this.title = title;
            this.description = description;
            this.location = location;
            this.invited = invited
            this.date = date;
            this.repetiton = repetition;
        }
    }
}