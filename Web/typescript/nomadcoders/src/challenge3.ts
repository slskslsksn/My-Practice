/* LocalStorage */
interface LocalStorageAPI<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: LocalStorageAPI<T> = {};
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  get(key: string): T {
    return this.storage[key];
  }
  clearItem(key: string) {
    delete this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

/* GeoLocation */
interface Pos {
  coor: {
    latitude: number;
    longitude: number;
  };
}

interface EError {
  value: number;
  message: string;
}

interface GeoOptions {
  maximumAge?: number;
  timeout?: number;
  enableHighAccuracy?: boolean;
}

interface GeolocationAPI {
  getCurrentPosition(successFn: (pos: Pos) => void): void;
  getCurrentPosition(successFn: (pos: Pos) => void, errorFn: (error: EError) => void): void;
  getCurrentPosition(successFn: (pos: Pos) => void, errorFn: (error: EError) => void, optionsObj: GeoOptions | undefined): void;

  watchPosition(successFn: (pos: Pos) => void): number;
  watchPosition(successFn: (pos: Pos) => void, errorFn: () => void): number;
  watchPosition(successFn: (pos: Pos) => void, errorFn: () => void, optionsObj: GeoOptions | undefined): number;

  clearWatch(id: number): void;
}

class GeoLocation implements GeolocationAPI {
  constructor (
    private watchs:[{
      id: number,
      currentPos: Pos | null,
      error: EError | null,
    }]
  ) {}
  getCurrentPosition(successFn: (pos: Pos) => void, errorFn?: (error: EError) => void, optionsObj?: GeoOptions | undefined) {
    const position: Pos = {coor:{latitude:132,longitude:110}};
    if(position) successFn(position);
    else if(errorFn) errorFn({value: 1, message: '오류'});
  }

  watchPosition(successFn: (pos: Pos) => void, errorFn?: () => void, optionsObj?: GeoOptions): number {
    const id = new Date().getTime();
    this.watchs.push({
      id,
      currentPos: null,
      error: null
    })
    const position:Pos = {coor:{latitude:132,longitude:110}};
    this.watchs.forEach(watch => {
      if(watch.id === id && watch.currentPos?.coor.latitude !== position.coor.latitude && watch.currentPos?.coor.longitude !== position.coor.longitude){
        watch.currentPos = position;
      }
    })
    return id;
  }

  clearWatch(id: number): void {
    for(let i=0; i<this.watchs.length; i++){
      if(this.watchs[i].id === id){
        this.watchs.splice(i, 1);
        break;
      }
    }
  }
}
