<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class PostsController extends Controller
{
    //
    public function getPosts() {
        $client = new Client();
        $res = $client->get('https://jsonplaceholder.typicode.com/posts');
        $statusCode = $res->getStatusCode();
        $body = $res->getBody()->getContents();
        
        return $body;
    }
}
