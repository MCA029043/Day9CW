
# Dynamic Div Styling with Dropdowns

This project showcases how to use JavaScript to manipulate the styling properties of a `<div>` element using dropdown menus. Users can select different options from the dropdowns to change the color, background color, padding, font size, and font weight of the target `<div>`.

### Step 1: HTML
The HTML code creates a container div and a target div. 
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Div Styling with Dropdowns</title>
</head>
<body>
    <div class="container">
        <select id="colorSelect">
            <option value="">Choose Color</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
        </select>

        <select id="bgColorSelect">
            <option value="">Choose Background Color</option>
            <option value="yellow">Yellow</option>
            <option value="cyan">Cyan</option>
            <option value="magenta">Magenta</option>
        </select>

        <select id="paddingSelect">
            <option value="">Choose Padding</option>
            <option value="5px">5px</option>
            <option value="10px">10px</option>
            <option value="15px">15px</option>
        </select>

        <select id="fontSizeSelect">
            <option value="">Choose Font Size</option>
            <option value="12px">12px</option>
            <option value="16px">16px</option>
            <option value="20px">20px</option>
        </select>

        <select id="fontWeightSelect">
            <option value="">Choose Font Weight</option>
            <option value="normal">Normal</option>
            <option value="bold">Bold</option>
        </select>

        <div id="targetDiv">This is a div</div>
    </div>
    <script src="script.js"></script>
</body>
</html>

```


### 2.  JavaScript

Create a JavaScript file and add the following code:

```javascript
document.addEventListener("DOMContentLoaded", function () {
    const colorSelect = document.getElementById("colorSelect");
    const bgColorSelect = document.getElementById("bgColorSelect");
    const paddingSelect = document.getElementById("paddingSelect");
    const fontSizeSelect = document.getElementById("fontSizeSelect");
    const fontWeightSelect = document.getElementById("fontWeightSelect");
    const targetDiv = document.getElementById("targetDiv");

    colorSelect.addEventListener("change", function () {
        targetDiv.style.color = colorSelect.value;
    });

    bgColorSelect.addEventListener("change", function () {
        targetDiv.style.backgroundColor = bgColorSelect.value;
    });

    paddingSelect.addEventListener("change", function () {
        targetDiv.style.padding = paddingSelect.value;
    });

    fontSizeSelect.addEventListener("change", function () {
        targetDiv.style.fontSize = fontSizeSelect.value;
    });

    fontWeightSelect.addEventListener("change", function () {
        targetDiv.style.fontWeight = fontWeightSelect.value;
    });
});

```
