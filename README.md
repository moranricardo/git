# ⚡ Ra Pulse - Telemetría de Kernels

![Última sync](https://img.shields.io/badge/Sincronizado-2026-10-04-brightgreen)
![Analizados](https://img.shields.io/badge/Analizados-500-blue)

> Monitor automatizado para la auditoría de parches en LineageOS y Motorola.

---

## 🚨 Parches Críticos Detectados (241)

<details>
<summary><b>Click para desplegar parches críticos</b></summary>

- **[LineageOS/android_kernel_qcom_sm8150]** BACKPORT: cgroup: remove unnecessary unlikely() *(ID: [506187](https://review.lineageos.org/c/506187))*
- **[LineageOS/android_kernel_qcom_sm8150]** UPSTREAM:cgroup: get rid of cgroup_freezer_frozen_exit() A task should never enter the exit path with the task->frozen bit set. Any frozen task must enter the signal handling loop and the only way to escape is through cgroup_leave_frozen(true), which unconditionally drops the task->frozen bit. So it means that cgroyp_freezer_frozen_exit() has zero chances to be called and has to be removed. *(ID: [506196](https://review.lineageos.org/c/506196))*
- **[LineageOS/android_kernel_qcom_sm8150]** UPSTREAM:cgroup: prevent spurious transition into non-frozen state If freezing of a cgroup races with waking of a task from the frozen state (like waiting in vfork() or in do_signal_stop()), a spurious transition of the cgroup state can happen. *(ID: [506195](https://review.lineageos.org/c/506195))*
- **[LineageOS/android_kernel_qcom_sm8150]** BACKPORT: signal: unconditionally leave the frozen state in ptrace_stop() *(ID: [506194](https://review.lineageos.org/c/506194))*
- **[LineageOS/android_kernel_qcom_sm8150]** BACKPORT: cgroup: Remove unused cgrp variable *(ID: [506193](https://review.lineageos.org/c/506193))*
- **[LineageOS/android_kernel_qcom_sm8150]** BACKPORT: cgroup: freezer: call cgroup_enter_frozen() with preemption disabled in ptrace_stop() *(ID: [506192](https://review.lineageos.org/c/506192))*
- **[LineageOS/android_kernel_qcom_sm8150]** BACKPORT: cgroup: freezer: fix frozen state inheritance *(ID: [506191](https://review.lineageos.org/c/506191))*
- **[LineageOS/android_kernel_qcom_sm8150]** BACKPORT: cgroup: remove extra cgroup_migrate_finish() call *(ID: [506190](https://review.lineageos.org/c/506190))*
- **[LineageOS/android_kernel_qcom_sm8150]** BACKPORT: cgroup: saner refcounting for cgroup_root *(ID: [506189](https://review.lineageos.org/c/506189))*
- **[LineageOS/android_kernel_qcom_sm8150]** BACKPORT: cgroup: Add named hierarchy disabling to cgroup_no_v1 boot param *(ID: [506188](https://review.lineageos.org/c/506188))*
- **[LineageOS/android_kernel_qcom_sm8150]** UPSTREAM: cgroup: add cgroup_parse_float() *(ID: [506186](https://review.lineageos.org/c/506186))*
- **[LineageOS/android_kernel_qcom_sm8150]** BACKPORT: cgroup: Explicitly remove core interface files *(ID: [506185](https://review.lineageos.org/c/506185))*
- **[LineageOS/android_kernel_qcom_sm8150]** BACKPORT: cgroup: Update documentation reference *(ID: [506184](https://review.lineageos.org/c/506184))*
- **[LineageOS/android_kernel_qcom_sm8150]** BACKPORT: cgroup: make cgroup.threads delegatable *(ID: [506183](https://review.lineageos.org/c/506183))*
- **[LineageOS/android_kernel_qcom_sm8150]** BACKPORT: string: drop __must_check from strscpy() and restore strscpy() usages in cgroup *(ID: [506182](https://review.lineageos.org/c/506182))*
- **[LineageOS/android_kernel_qcom_sm8150]** BACKPORT: cgroup: use strlcpy() instead of strscpy() to avoid spurious warning *(ID: [506181](https://review.lineageos.org/c/506181))*
- **[LineageOS/android_kernel_qcom_sm8150]** BACKPORT: cgroup: avoid copying strings longer than the buffers *(ID: [506180](https://review.lineageos.org/c/506180))*
- **[LineageOS/android_kernel_qcom_sm8150]** BACKPORT: cgroup: statically initialize init_css_set->dfl_cgrp *(ID: [506179](https://review.lineageos.org/c/506179))*
- **[LineageOS/android_hardware_nxp_nfc]** nxp: Stop client thread spin and queue UAF *(ID: [506080](https://review.lineageos.org/c/506080))*
- **[LineageOS/android_hardware_nxp_nfc]** nxp: Stop client thread spin and queue UAF *(ID: [506079](https://review.lineageos.org/c/506079))*
- **[LineageOS/android_kernel_motorola_sm8550]** misc: Don't pull shmem_mapping() into the RichTap modules *(ID: [506153](https://review.lineageos.org/c/506153))*
- **[LineageOS/android_kernel_motorola_sm8550]** input: misc: qcom-hv-haptics: set custom effect max mv to richtap value *(ID: [506152](https://review.lineageos.org/c/506152))*
- **[LineageOS/android_device_motorola_sm8550-common]** sm8550-common: vibrator: effect: fix -Wreorder-init-list *(ID: [506148](https://review.lineageos.org/c/506148))*
- **[LineageOS/android_kernel_oneplus_sm8750-modules]** wlan: Import additional changes from PLQ110_16.0.9.401(CN01) *(ID: [503157](https://review.lineageos.org/c/503157))*
- **[LineageOS/android_kernel_oneplus_sm8750-modules]** display-drivers: Fix LHBM touch state handling *(ID: [506129](https://review.lineageos.org/c/506129))*
- **[LineageOS/android_kernel_oneplus_sm8750-modules]** camera-kernel: Update changes from PLQ110_16.0.9.401(CN01) *(ID: [503152](https://review.lineageos.org/c/503152))*
- **[LineageOS/android_kernel_oneplus_sm8750-modules]** audio-kernel: Update changes from PLQ110_16.0.9.401(CN01) *(ID: [503151](https://review.lineageos.org/c/503151))*
- **[LineageOS/android_kernel_oneplus_sm8750-modules]** video-driver: Updates changes from PLQ110_16.0.9.401(CN01) *(ID: [503150](https://review.lineageos.org/c/503150))*
- **[LineageOS/android_kernel_oneplus_sm8750-modules]** display-drivers: Update changes from PLQ110_16.0.9.401(CN01) *(ID: [503149](https://review.lineageos.org/c/503149))*
- **[LineageOS/android_kernel_oneplus_sm8850-devicetrees]** oplus: Configure iceland GPIO lid switch *(ID: [506128](https://review.lineageos.org/c/506128))*

</details>

## 📱 Línea Motorola Activa (25)

<details>
<summary><b>Click para desplegar cambios Motorola</b></summary>

- **[LineageOS/android_device_motorola_xpeng]** xpeng: Increase auto brightness light debounce *(ID: [506060](https://review.lineageos.org/c/506060))*
- **[LineageOS/android_kernel_motorola_sm8550]** misc: Don't pull shmem_mapping() into the RichTap modules *(ID: [506153](https://review.lineageos.org/c/506153))*
- **[LineageOS/android_kernel_motorola_sm8550]** input: misc: qcom-hv-haptics: set custom effect max mv to richtap value *(ID: [506152](https://review.lineageos.org/c/506152))*
- **[LineageOS/android_device_motorola_sm8550-common]** sm8550-common: vibrator: remove example primitives by qcom *(ID: [506150](https://review.lineageos.org/c/506150))*
- **[LineageOS/android_device_motorola_sm8550-common]** sm8550-common: vibrator: effect: import richtap effects *(ID: [506149](https://review.lineageos.org/c/506149))*
- **[LineageOS/android_device_motorola_sm8550-common]** sm8550-common: vibrator: effect: fix -Wreorder-init-list *(ID: [506148](https://review.lineageos.org/c/506148))*
- **[LineageOS/android_device_motorola_sm8550-common]** sm8550-common: vibrator: effect: use header library *(ID: [506147](https://review.lineageos.org/c/506147))*
- **[LineageOS/android_device_motorola_sm8550-common]** sm8475-common: Import qti vibrator effect and rename *(ID: [506146](https://review.lineageos.org/c/506146))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: Update blobs from W1UANS36H.29-25-2-6 9d51f-e4bde5 *(ID: [506143](https://review.lineageos.org/c/506143))*
- **[LineageOS/android_device_motorola_avatrn]** avatrn: Update blobs from W1UANS36H.29-25-2-6 9d51f-e4bde5 *(ID: [506142](https://review.lineageos.org/c/506142))*
- **[LineageOS/android_device_motorola_beckham]** beckham: audio: Route audio Moto Mods through usb-headset paths *(ID: [505943](https://review.lineageos.org/c/505943))*
- **[LineageOS/android_kernel_motorola_sm8550]** Merge branch 'lineage-21' of github.com:LineageOS/android_kernel_qcom_sm8550 into HEAD *(ID: [506084](https://review.lineageos.org/c/506084))*
- **[LineageOS/android_device_motorola_rtwo]** rtwo: Frameworks: Tune low-lux auto-brightness curve and debounce *(ID: [506065](https://review.lineageos.org/c/506065))*
- **[LineageOS/android_device_motorola_beckham]** beckham: Bring back the prebuilt audio HAL *(ID: [506063](https://review.lineageos.org/c/506063))*
- **[LineageOS/android_device_motorola_milanf]** milanf: Handle dt2w through power HAL extension *(ID: [479977](https://review.lineageos.org/c/479977))*
- **[LineageOS/android_device_motorola_milanf]** milanf: Add common libqti-perfd-client to namespaces *(ID: [479978](https://review.lineageos.org/c/479978))*
- **[LineageOS/android_kernel_motorola_sm8250]** Merge remote-tracking branch 'sm8250/lineage-20' into HEAD *(ID: [505878](https://review.lineageos.org/c/505878))*
- **[LineageOS/android_kernel_motorola_sm6225]** arm64: configs: guamna: Build moto modules *(ID: [501509](https://review.lineageos.org/c/501509))*
- **[LineageOS/android_kernel_motorola_sm6225]** techpack: camera-bengal: Enable legacy camera fix for guamna *(ID: [501508](https://review.lineageos.org/c/501508))*
- **[LineageOS/android_kernel_motorola_sm6225]** input: touchscreen: himax_v3_mmi: Fix CFI failure in module init *(ID: [501505](https://review.lineageos.org/c/501505))*
- **[LineageOS/android_device_motorola_smith]** smith: Allow setting independent dpi settings for each display *(ID: [503084](https://review.lineageos.org/c/503084))*
- **[LineageOS/android_device_motorola_smith]** smith: Drop soundtrigger HAL *(ID: [505698](https://review.lineageos.org/c/505698))*
- **[LineageOS/android_device_motorola_smith]** smith: Use MMI touchscreen class to toggle dt2w [2/2] *(ID: [505697](https://review.lineageos.org/c/505697))*
- **[LineageOS/android_device_motorola_smith]** smith: overlay: Update deprecated screen power items *(ID: [505696](https://review.lineageos.org/c/505696))*
- **[LineageOS/android_hardware_motorola]** MotoActions: remove help dialog *(ID: [505404](https://review.lineageos.org/c/505404))*

</details>

---
*Generado automáticamente por Ra Pulse*
