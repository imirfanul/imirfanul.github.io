export class IProjects {
  constructor(
    public id: number | string,
    public name: string,
    public description: string,
    public projectLink: string,
    public liveUrl: string,
    public isFeatured: boolean,
    public features: string[],
    public tags: string[],
    public techStuff: string[],
    public additionalData?: { title: string; data: string[] }[],

  ){}
}
