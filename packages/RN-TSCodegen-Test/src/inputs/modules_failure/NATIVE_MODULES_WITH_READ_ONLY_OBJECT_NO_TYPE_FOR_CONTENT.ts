
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from modules_failure/NATIVE_MODULES_WITH_READ_ONLY_OBJECT_NO_TYPE_FOR_CONTENT.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/modules/__test_fixtures__/failures.js)

import {TurboModule} from 'react-native-tscodegen-types'
import {TurboModuleRegistry} from 'react-native-tscodegen-types';
'use strict';

export interface Spec extends TurboModule {
  getString(arg: Readonly<undefined>): string;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');


