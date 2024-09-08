#!/bin/bash

npx sanity schema extract --enforce-required-fields
npx sanity typegen generate
mv ./sanity.types.ts ../nuxt/types/schema.ts
