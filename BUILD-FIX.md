# Build Fix - Content JSON Imports

## Problem
The build was failing because Vite couldn't resolve imports to JSON files in the `/content/` directory:
```
Could not resolve "../../../content/pages/evidence-library.json"
```

## Root Cause
1. Vite's `fs.strict: true` prevented importing files outside the `client/` directory
2. Relative paths like `../../../content/` were not allowed by the strict filesystem security

## Solution Applied

### 1. Added Content Directory Alias
**File: `vite.config.ts`**
```typescript
resolve: {
  alias: {
    "@content": path.resolve(import.meta.dirname, "content"),
    // ... other aliases
  },
}
```

### 2. Allowed Content Directory Access
**File: `vite.config.ts`**
```typescript
fs: {
  strict: true,
  allow: [
    path.resolve(import.meta.dirname, "client"),
    path.resolve(import.meta.dirname, "content"),  // ← Added this
  ],
  deny: ["**/.*"],
}
```

### 3. Updated TypeScript Config
**File: `tsconfig.json`**
```json
{
  "include": ["client/src/**/*", "shared/**/*", "server/**/*", "content/**/*"],
  "compilerOptions": {
    "paths": {
      "@content/*": ["./content/*"]  // ← Added this
    }
  }
}
```

### 4. Updated Import Statements
Changed all relative imports to use the new alias:

**Before:**
```typescript
import homeContent from "../../../content/pages/home.json";
```

**After:**
```typescript
import homeContent from "@content/pages/home.json";
```

## Files Updated
- ✅ `vite.config.ts` - Added alias and filesystem permissions
- ✅ `tsconfig.json` - Added TypeScript path mapping
- ✅ `client/src/pages/Home.tsx` - Updated import
- ✅ `client/src/pages/evidence/EvidenceLibrary.tsx` - Updated import
- ✅ `client/src/pages/evidence/SdsTds.tsx` - Updated import

## Verification
Build tested locally and completed successfully:
```bash
npm run build
# ✓ built in 7.15s
```

## Benefits
1. ✅ **Cleaner imports** - No more `../../../` paths
2. ✅ **Build works** - Vite can resolve content imports
3. ✅ **TypeScript support** - IDE autocomplete for content paths
4. ✅ **Consistent** - Matches pattern of other aliases like `@/` and `@shared/`

## Usage Going Forward
Always import content JSON files using the `@content/` alias:
```typescript
import myContent from "@content/pages/my-page.json";
```
