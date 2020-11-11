![DSPLAY - Digital Signage](https://developers.dsplay.tv/assets/images/dsplay-logo.png)

# DSPLAY - Countdown template

This is a HTML-based template for [DSPLAY](https://dsplay.tv).

## Basics

> This project was bootstrapped with [DSPLAY - React Template Boilerplate](https://github.com/dsplay/template-boilerplate-react).

## Usage

This template has 5 widgets:

- Timer countdown (Text time number)
- Timer title (Call to action)
- Background image (A single image)
- Title color (Color)
- Countdown text color (Color)

All widget are optional and will depend on the provided template variables.

![Screenshot](assets/screenshot-01.png)

### Configuration

This template has many configuration variables as the following table shows:

| Variable              | Widget   | Type    | Description                                                                                                                                                                       |
|-----------------------|----------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
                                    |
| `call_to_action_title`  | CTA     | Text   | Call to action text.                                                                                                              |
| `time_till_date`        | Time to till      | Date   |                                                                                                                                        |
| `counter_text_color`            | All      | image   |                                                                                                                                                                                   |
| `title_text_color`          | All      | color   |                                                                                                                                                                                   |
| `background`  | RSS      | color   |                                                                                                                                                                                   |
| `background_color`  | Background color | color   |                                                                                                                                                                                   |
| `theme` | Template Theme | color scheme   |                                                                                                                                                                                   |


## Customizing

### Getting started

```
git clone https://github.com/dsplay/template-horizontal-info-bar.git my-awesome-template
cd my-awesome-template
rm -rf .git
npm i
npm start
```

## Packing (release build)

To create a release build of the template, ready to be uploaded to DSPLAY, just run:

```
npm run zip
```

It will generate a `template.zip` file ready to be deployed to [DSPLAY Web Manager](https://manager.dsplay.tv/template/create)

## More

The see more about DSPLAY HTML Templates, visit: https://developers.dsplay.tv/docs/html-templates
```