# Accord Code Challenge
This is a sample project drop down - image uploader with progress css bar.

## Author
- Mariano Peyregne (marianosantafe@gmail.com)

## Technologies
- Typescript
- ReactJS
- Axios
- Styled components

## To be done
- Image validation (Backend and server side)

## Backend was written in PHP just for simplicity
There is the source code of the backend used:

```
<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Content-type: application/json');


try {
    $target_dir = "uploads/";
    $unique_hash = uniqid();
    $target_file = $target_dir . $unique_hash . basename($_FILES["file"]["name"]);
    $actual_link = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    $uploadUrl = dirname($actual_link) . '/' . $target_file;
    $upload = move_uploaded_file($_FILES["file"]["tmp_name"], $target_file);
} catch (\Exception $e) {

    echo json_encode([
        'error' => true,
        'message' => $e->getMessage()
    ]);

}

echo json_encode([
    'error' => false,
    'message' => 'Upload successfull',
    'url' => $uploadUrl
]);
```