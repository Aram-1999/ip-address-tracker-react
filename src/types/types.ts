export interface Location {
    country: string;
    region: string;
    city: string;
    lat: string;
    lng: string;
    postalCode: string;
    timezone: string;
    geonameId: number;
}

export interface Data {
  ip: string;
  location: Location;
  as: {
    asn: number;
    name: string;
    route: string;
    domain: string;
    type: string;
  };
  isp: string;
}