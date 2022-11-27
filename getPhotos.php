<?php

$data = file_get_contents("pho.txt");

$data = json_decode($data);
$photo = [];
foreach ($data as $key => $value) {
    $item = [
        "public_id" => $value->public_id,
        "width" => $value->width,
        "height" => $value->height,
    ];

    array_push($photo, $item);
}
usort($photo, function($a, $b){
    return $a['public_id'] <=> $b['public_id'];
});
$result = json_encode($photo, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
file_put_contents("photo.json", $result);
