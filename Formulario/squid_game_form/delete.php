<?php
$jsonFile = 'data/participants.json';
$participants = json_decode(file_get_contents($jsonFile), true);

$id = $_GET['id'];

$participants = array_filter($participants, function($p) use ($id) {
    return $p['id'] != $id;
});

file_put_contents($jsonFile, json_encode(array_values($participants), JSON_PRETTY_PRINT));

header("Location: list.php");
exit;
?>
