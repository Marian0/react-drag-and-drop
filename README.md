# Accord Code Challenge
This is a sample project drop down - image uploader with progress css bar. 
To configure backend endpoint you should edit the `src/components/drag-and-drop/drag-and-drop.component.tsx` file.

## Preview
![](https://user-images.githubusercontent.com/624592/72985920-53269a80-3de7-11ea-8ec8-869f5f5e1c7d.gif)

## Author
- Mariano Peyregne (marianosantafe@gmail.com)

## Technologies
- Typescript
- ReactJS
- Axios
- Styled components

## To be done
- Image validation (Backend and server side)
- Parametrize backend URL in an ENV file
- Add refs to colors to components styles

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