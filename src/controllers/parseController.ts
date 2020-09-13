import { Router, Request, Response, NextFunction } from 'express';
import { apiErrorHandler } from './../handlers/errorHandler';
import { RequestBody, ResponseBody } from './../models/body';

export default class ParseController {
    constructor() { }

    getV1ParsedValue(req: Request, res: Response) {
        try {
            let data = new RequestBody(req.body.data || null).data;
            let arr = (data || '').split('0').filter(ele => { return ele && ele != '' });
            for (let index = 0; index < arr.length; index++) {
                let start = data.indexOf(arr[index]);
                let end = (index < arr.length - 1) ? data.indexOf(arr[index + 1]) : data.length - 1;
                arr[index] = (index < arr.length - 1) ? data.substring(start, end) : arr[index];
            }
            res.json(new ResponseBody(arr))
        }
        catch (err) {
            apiErrorHandler(err, req, res, 'V1 Parsing failed.');
        }
    }

    getV2ParsedValue(req: Request, res: Response) {
        try {
            let data = new RequestBody(req.body.data || null).data;
            let arr = (data || '').split('0').filter(ele => { return ele && ele != '' })
            if (arr.length > 2) {
                arr[2] = arr[2].substring(0, 3) + '-' + arr[2].substring(3, arr[2].length);
            }
            res.json(new ResponseBody(arr))
        }
        catch (err) {
            apiErrorHandler(err, req, res, 'V2 Parsing failed.');
        }
    }
}