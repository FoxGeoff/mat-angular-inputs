# MatAngularInputs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

## Project Introduction

1. Ref. article: <https://dev.to/cliffeby/understanding-angular-material-table-inputs-1lp>
2. Ref code: <https://stackblitz.com/edit/angular-trsxts>

## Kanban Task: setup of project

### Task: Best practice module organization

```Javascript
/**
 * CORE MODULE
 * Core folder should contain singleton
 * services shared throughout app
 *
 * Services that are specific to a feature can
 * go in the feature's folder
 *
 * Example: LoggingService, ErrorService,
 * DataSerice
 */

/**
 * SHARED MODULE: Reusable components, pipes and directives
 *
 * Shared folder should contain reusable
 * components, pipes and directives
 *
 * Example: CalendarComponent,
 * AutoCompleteComponent
 */
```

### Task: Add ui.component

### Task: Add core.module, shared.module and material.module

### Task: Add Angular Material and Flex Layout

1. Run `ng add @angular/material`
2. Run `npm i -s @angular/flex-layout @angular/cdk`
3. CLOSE VSCODE AND RESTART!

### Task: Hook-up nav component
