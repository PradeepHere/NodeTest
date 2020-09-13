export class RequestBody {
    public data: string;

    constructor(data) {
        this.data = data.toString();
    }
}

export class ResponseBody {
    public statusCode: number;
    public data: DemoGraphics;

    constructor(data) {
        this.statusCode = 200;
        this.data = new DemoGraphics();
        this.data.firstName = data[0];
        this.data.lastName = data[1];
        this.data.clientId = data[2];
    }
}

export class DemoGraphics {
    public firstName: string;
    public lastName: string;
    public clientId: string;
}