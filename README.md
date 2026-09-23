# ⚡ Ra Pulse - Telemetría de Kernels

![Última sync](https://img.shields.io/badge/Sincronizado-2026-09-23-brightgreen)
![Analizados](https://img.shields.io/badge/Analizados-500-blue)

> Monitor automatizado para la auditoría de parches en LineageOS y Motorola.

---

## 🚨 Parches Críticos Detectados (317)

<details>
<summary><b>Click para desplegar parches críticos</b></summary>

- **[LineageOS/android_kernel_xiaomi_earth]** [ALPS08617997] EEM: Enable EEM_NOT_READY *(ID: [504581](https://review.lineageos.org/c/504581))*
- **[LineageOS/android_kernel_xiaomi_earth]** fixup! UPSTREAM: netlink: make validation more configurable for future strictness *(ID: [504580](https://review.lineageos.org/c/504580))*
- **[LineageOS/android_kernel_xiaomi_earth]** ARM64: configs: earth: Enable ZRAM WRITEBACK Bug: 144354600 Bug: 139846758 Test: boot to home *(ID: [504579](https://review.lineageos.org/c/504579))*
- **[LineageOS/android_kernel_xiaomi_earth]** arm64: configs: earth: Enable CFI *(ID: [504578](https://review.lineageos.org/c/504578))*
- **[LineageOS/android_kernel_xiaomi_earth]** arm64: configs: earth: Enable CONFIG_SHADOW_CALL_STACK *(ID: [504577](https://review.lineageos.org/c/504577))*
- **[LineageOS/android_kernel_xiaomi_earth]** arm64: configs: earth: Switch linker to LLD *(ID: [504576](https://review.lineageos.org/c/504576))*
- **[LineageOS/android_kernel_xiaomi_earth]** arm64: configs: earth: Enable CONFIG_RD_LZ4 *(ID: [504575](https://review.lineageos.org/c/504575))*
- **[LineageOS/android_kernel_xiaomi_earth]** arm64: configs: earth: Enable backlight leds trigger *(ID: [504574](https://review.lineageos.org/c/504574))*
- **[LineageOS/android_kernel_xiaomi_earth]** video: mt6768: Don’t check for ovl status *(ID: [504573](https://review.lineageos.org/c/504573))*
- **[LineageOS/android_kernel_xiaomi_earth]** drivers: gpu: mali-valhall: Disable CONFIG_MALI_DEBUG *(ID: [504572](https://review.lineageos.org/c/504572))*
- **[LineageOS/android_kernel_xiaomi_earth]** leds: mtk: mtkfb: fix backlight callback CFI signature mismatch *(ID: [504571](https://review.lineageos.org/c/504571))*
- **[LineageOS/android_kernel_xiaomi_earth]** video: ddp: rdma: fix ioctl function pointer signature mismatch *(ID: [504570](https://review.lineageos.org/c/504570))*
- **[LineageOS/android_kernel_xiaomi_earth]** drivers: mediatek: dispsys: Build ddp_mmp unconditionally for MT6768 platform *(ID: [504569](https://review.lineageos.org/c/504569))*
- **[LineageOS/android_kernel_xiaomi_earth]** touchscreen: mediatek: ft8057: Fixup "Implement double_tap node" *(ID: [504568](https://review.lineageos.org/c/504568))*
- **[LineageOS/android_kernel_xiaomi_earth]** touchscreen: mediatek: nt36525b_spi: Run `nvt_fwu_work` immediately on resume *(ID: [504567](https://review.lineageos.org/c/504567))*
- **[LineageOS/android_kernel_xiaomi_earth]** firmware: Update touchscreen firmware from `V816.0.16.0.UCVMIXM` *(ID: [504566](https://review.lineageos.org/c/504566))*
- **[LineageOS/android_kernel_xiaomi_earth]** mali_valhall: Remove MediaTek memtrack support *(ID: [504565](https://review.lineageos.org/c/504565))*
- **[LineageOS/android_kernel_xiaomi_earth]** mali_kbase: platform: Add per-process and global sysfs nodes for GPU mem usage *(ID: [504564](https://review.lineageos.org/c/504564))*
- **[LineageOS/android_kernel_xiaomi_earth]** mali_kbase: platform: Add per-process and global accounting for dma-buf pages *(ID: [504563](https://review.lineageos.org/c/504563))*
- **[LineageOS/android_kernel_xiaomi_earth]** drivers: mediatek: spm: Allow compiling without AEE *(ID: [504562](https://review.lineageos.org/c/504562))*
- **[LineageOS/android_kernel_xiaomi_earth]** drivers: mediatek: eem_v2: Allow compiling without AEE *(ID: [504561](https://review.lineageos.org/c/504561))*
- **[LineageOS/android_kernel_xiaomi_earth]** drivers:/ touchscreen: chipone_ICNL_9916: Implement double_tap node *(ID: [504560](https://review.lineageos.org/c/504560))*
- **[LineageOS/android_kernel_xiaomi_earth]** drivers/: touchscreen: nt36525b: Implement double_tap node *(ID: [504559](https://review.lineageos.org/c/504559))*
- **[LineageOS/android_kernel_xiaomi_earth]** drivers/: touchscreen: ft8057: Implement double_tap node *(ID: [504558](https://review.lineageos.org/c/504558))*
- **[LineageOS/android_kernel_xiaomi_earth]** drivers/: touchscreen: Add an interface to expose TP features to userspace *(ID: [504557](https://review.lineageos.org/c/504557))*
- **[LineageOS/android_kernel_xiaomi_earth]** drivers/: touchscreen: Drop Xiaomi touchfeature support *(ID: [504556](https://review.lineageos.org/c/504556))*
- **[LineageOS/android_kernel_xiaomi_earth]** drivers: connectivity: gen4m: Use PM notifier to control WLAN suspend *(ID: [504555](https://review.lineageos.org/c/504555))*
- **[LineageOS/android_kernel_xiaomi_earth]** drivers: connectivity: gen4m: Silence more debug logging *(ID: [504554](https://review.lineageos.org/c/504554))*
- **[LineageOS/android_kernel_xiaomi_earth]** drivers: connectivity: gen4m: Disable WLAN wakelocks *(ID: [504553](https://review.lineageos.org/c/504553))*
- **[LineageOS/android_kernel_xiaomi_earth]** drivers: connectivity: Disable WLAN boost if !CONFIG_MTK_CPU_CTRL *(ID: [504552](https://review.lineageos.org/c/504552))*

</details>

## 📱 Línea Motorola Activa (34)

<details>
<summary><b>Click para desplegar cambios Motorola</b></summary>

- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: gps: fix two issues about edngss-daemon launch *(ID: [503163](https://review.lineageos.org/c/503163))*
- **[LineageOS/android_device_motorola_sm6225-common]** fixup! sm6225-common: Rework audio policy configuration location *(ID: [504425](https://review.lineageos.org/c/504425))*
- **[LineageOS/android_device_motorola_sm8550-common]** sm8550-common: Drop qspmhal *(ID: [504429](https://review.lineageos.org/c/504429))*
- **[LineageOS/android_device_motorola_sm6225-common]** fixup! sm6225-common: Rework audio policy configuration location *(ID: [504426](https://review.lineageos.org/c/504426))*
- **[LineageOS/android_device_motorola_fogos]** audio: fix microphone delay in mixer_paths.xml *(ID: [504298](https://review.lineageos.org/c/504298))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: gps: fix two issues about edngss-daemon launch *(ID: [503171](https://review.lineageos.org/c/503171))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: gps: fix edgnss blocked by syscall issue *(ID: [503170](https://review.lineageos.org/c/503170))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: gps: fix edgnss-daemon blocked by sched_get_priority_min/max *(ID: [503169](https://review.lineageos.org/c/503169))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: gps: fix edgnss blocked by syscall issue *(ID: [503162](https://review.lineageos.org/c/503162))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: gps: fix edgnss-daemon blocked by sched_get_priority_min/max *(ID: [503161](https://review.lineageos.org/c/503161))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: gps: minijail policy cleanup *(ID: [503160](https://review.lineageos.org/c/503160))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: gps: Add two sys calls in xtwifi-client seccomp policy file *(ID: [503159](https://review.lineageos.org/c/503159))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: gps: fix edgnss-daemon blocked by syscall fdatasync *(ID: [503158](https://review.lineageos.org/c/503158))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: Inherit AIDL compatibility matrix *(ID: [502460](https://review.lineageos.org/c/502460))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: gps: Convert qspa to blueprint *(ID: [502459](https://review.lineageos.org/c/502459))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: address seccomp failures for qsap_location *(ID: [502458](https://review.lineageos.org/c/502458))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: gps: Fix format specifiers *(ID: [502457](https://review.lineageos.org/c/502457))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: gps: Fix unqualified-std-cast-call warning *(ID: [502456](https://review.lineageos.org/c/502456))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: gps: Fuzzer should be using android.hardware.gnss-V4-ndk *(ID: [502455](https://review.lineageos.org/c/502455))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: gps: Convert fuzzer to blueprint *(ID: [502454](https://review.lineageos.org/c/502454))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: gps/location: Update to LA.VENDOR.15.4.1.r1-10300-WAIPIO.QSSI16.0 *(ID: [502453](https://review.lineageos.org/c/502453))*
- **[LineageOS/android_device_motorola_sm8475-common]** sm8475-common: Update GNSS blobs from W1VAS36.62-22-16-16 *(ID: [502452](https://review.lineageos.org/c/502452))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: gps: minijail policy cleanup *(ID: [503168](https://review.lineageos.org/c/503168))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: gps: Add two sys calls in xtwifi-client seccomp policy file *(ID: [503167](https://review.lineageos.org/c/503167))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: gps: fix edgnss-daemon blocked by syscall fdatasync *(ID: [503166](https://review.lineageos.org/c/503166))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: Inherit AIDL compatibility matrix *(ID: [502451](https://review.lineageos.org/c/502451))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: gps: Convert qspa to blueprint *(ID: [502367](https://review.lineageos.org/c/502367))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: address seccomp failures for qsap_location *(ID: [502365](https://review.lineageos.org/c/502365))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: gps: Fix format specifiers *(ID: [502364](https://review.lineageos.org/c/502364))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: gps: Fix unqualified-std-cast-call warning *(ID: [502363](https://review.lineageos.org/c/502363))*

</details>

---
*Generado automáticamente por Ra Pulse*
