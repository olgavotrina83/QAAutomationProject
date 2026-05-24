# SauceDemo Context

Target application: `https://www.saucedemo.com/`.

## Users
- `standard_user` is the default happy-path user.
- `locked_out_user` must show a login error.
- Password for public demo users is `secret_sauce`.

## Core flows
- Login and logout.
- Inventory list visibility.
- Product sorting.
- Add and remove product from cart.
- Checkout with customer information.

## Product conventions
- SauceDemo exposes stable `data-test` attributes.
- Tests should avoid relying on visual order unless the scenario is sorting.
- Test data belongs in `test/data/`.
