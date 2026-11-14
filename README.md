# ⚡ Ra Pulse - Telemetría de Kernels

![Última sync](https://img.shields.io/badge/Sincronizado-2026-11-14-brightgreen)
![Analizados](https://img.shields.io/badge/Analizados-500-blue)

> Monitor automatizado para la auditoría de parches en LineageOS y Motorola.

---

## 🚨 Parches Críticos Detectados (351)

<details>
<summary><b>Click para desplegar parches críticos</b></summary>

- **[LineageOS/android_hardware_qcom_display]** composer: Don't group pluggable display configs *(ID: [513360](https://review.lineageos.org/c/513360))*
- **[LineageOS/android_hardware_qcom_display]** composer: Call SetFrameBufferConfig in SubmitDisplayConfig *(ID: [513389](https://review.lineageos.org/c/513389))*
- **[LineageOS/android_hardware_qcom_display]** composer: Resize the framebuffer on legacy config changes too *(ID: [513424](https://review.lineageos.org/c/513424))*
- **[LineageOS/android_kernel_qcom_sm8250]** video: driver: Return proper error code *(ID: [513407](https://review.lineageos.org/c/513407))*
- **[LineageOS/android_hardware_qcom_display]** composer: Report each pluggable display config as its own group *(ID: [507697](https://review.lineageos.org/c/507697))*
- **[LineageOS/android_hardware_motorola]** sensors: Seek to offset 0 before writing enable sysfs node *(ID: [513396](https://review.lineageos.org/c/513396))*
- **[LineageOS/android_kernel_qcom_sm8250]** techpack: Don't build legacy camera and video drivers for bengal/lito/kona *(ID: [513421](https://review.lineageos.org/c/513421))*
- **[LineageOS/android_kernel_qcom_sm8250]** techpack: camera: Remove duplicate check *(ID: [513420](https://review.lineageos.org/c/513420))*
- **[LineageOS/android_kernel_qcom_sm8250]** msm: camera: sensor: TOCTOU error handling *(ID: [513419](https://review.lineageos.org/c/513419))*
- **[LineageOS/android_kernel_qcom_sm8250]** msm: camera: sensor: Proper handling of race condition in util api *(ID: [513418](https://review.lineageos.org/c/513418))*
- **[LineageOS/android_kernel_qcom_sm8250]** msm: camera: sensor: handling condition for random read *(ID: [513417](https://review.lineageos.org/c/513417))*
- **[LineageOS/android_kernel_qcom_sm8250]** msm: camera: isp: Copy the userdata in kernel to avoid TOCTOU *(ID: [513416](https://review.lineageos.org/c/513416))*
- **[LineageOS/android_kernel_qcom_sm8250]** msm: camera: icp: io buf config num validation *(ID: [513415](https://review.lineageos.org/c/513415))*
- **[LineageOS/android_kernel_qcom_sm8250]** msm: camera: sensor: TOCTOU error handling in eeprom *(ID: [513414](https://review.lineageos.org/c/513414))*
- **[LineageOS/android_kernel_qcom_sm8250]** msm: camera: sensor: TOCTOU error handling in eeprom *(ID: [513413](https://review.lineageos.org/c/513413))*
- **[LineageOS/android_kernel_qcom_sm8250]** msm: camera: memmgr: Remove the mutex lock for kref variable *(ID: [513412](https://review.lineageos.org/c/513412))*
- **[LineageOS/android_kernel_qcom_sm8250]** msm: camera: sensor: Handling race condition in util api *(ID: [513411](https://review.lineageos.org/c/513411))*
- **[LineageOS/android_kernel_qcom_sm8250]** msm: camera: memmgr: Add refcount to track umd in use buffers *(ID: [513410](https://review.lineageos.org/c/513410))*
- **[LineageOS/android_kernel_qcom_sm8250]** msm: vidc/cvp: fix function type for hfi_cmd_response_callback *(ID: [513409](https://review.lineageos.org/c/513409))*
- **[LineageOS/android_kernel_qcom_sm8250]** msm: vidc/cvp: Fix handle_cmd_response parameter type *(ID: [513408](https://review.lineageos.org/c/513408))*
- **[LineageOS/android_kernel_qcom_sm8250]** video: driver: Return proper error code *(ID: [513406](https://review.lineageos.org/c/513406))*
- **[LineageOS/android_kernel_qcom_sm8250]** msm: vidc: fix error during debugfs init *(ID: [513405](https://review.lineageos.org/c/513405))*
- **[LineageOS/android_kernel_qcom_sm8250]** techpack: video: hfi_iris2: Fix -Wpointer-to-int-cast *(ID: [513404](https://review.lineageos.org/c/513404))*
- **[LineageOS/android_kernel_qcom_sm8250]** msm: vidc: Release cvp buffer lock in invalid buffer case *(ID: [513403](https://review.lineageos.org/c/513403))*
- **[LineageOS/android_kernel_qcom_sm8250]** msm: vidc: Fix possible UAF during buffer unregister call *(ID: [513402](https://review.lineageos.org/c/513402))*
- **[LineageOS/android_kernel_qcom_sm8250]** vidc: Skip unsupported session load in load calculation *(ID: [513401](https://review.lineageos.org/c/513401))*
- **[LineageOS/android_hardware_samsung_slsi-linaro_exynos]** gralloc4: Import GrallocMapperCamera from Gralloc3 and adapt *(ID: [513377](https://review.lineageos.org/c/513377))*
- **[LineageOS/android_kernel_qcom_sdm660]** mm: shmem: Do not cancel a committed charge when UFFDIO_COPY fails *(ID: [513224](https://review.lineageos.org/c/513224))*
- **[LineageOS/android_kernel_qcom_sdm660]** mm: userfaultfd: Commit the memcg charge before the page goes on the LRU *(ID: [513223](https://review.lineageos.org/c/513223))*
- **[LineageOS/android_hardware_samsung_slsi-linaro_graphics]** libdrmresource: Add support for skip_frameupdate *(ID: [513395](https://review.lineageos.org/c/513395))*

</details>

## 📱 Línea Motorola Activa (18)

<details>
<summary><b>Click para desplegar cambios Motorola</b></summary>

- **[LineageOS/android_hardware_motorola]** sensors: Seek to offset 0 before writing enable sysfs node *(ID: [513396](https://review.lineageos.org/c/513396))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: Do not force HWC copy for virtual displays *(ID: [513328](https://review.lineageos.org/c/513328))*
- **[LineageOS/android_device_motorola_sm7435-common]** sm7435-common: Move overlays for 6GHz support *(ID: [508519](https://review.lineageos.org/c/508519))*
- **[LineageOS/android_device_motorola_avatrn]** avatrn: Build WifiResQca6750 *(ID: [508520](https://review.lineageos.org/c/508520))*
- **[LineageOS/android_device_motorola_bronco]** bronco: disable SDM dynamic fps *(ID: [513253](https://review.lineageos.org/c/513253))*
- **[LineageOS/android_device_motorola_mt6768-common]** mt6768-common: Build the MediaTek Wi-Fi HAL and wpa_supplicant_8 lib *(ID: [512963](https://review.lineageos.org/c/512963))*
- **[LineageOS/android_device_motorola_avatrn]** avatrn: overlay: Disable bridged SoftAP concurrency *(ID: [513326](https://review.lineageos.org/c/513326))*
- **[LineageOS/android_device_motorola_rhodep]** rhodep: audio: Add more sampling rates to voip_{rx,tx} *(ID: [513292](https://review.lineageos.org/c/513292))*
- **[LineageOS/android_device_motorola_denver]** denver: audio: Add more sampling rates to voip_{rx,tx} *(ID: [513291](https://review.lineageos.org/c/513291))*
- **[LineageOS/android_device_motorola_miami]** miami: audio: Add more sampling rates to voip_{rx,tx} *(ID: [513290](https://review.lineageos.org/c/513290))*
- **[LineageOS/android_device_motorola_ibiza]** ibiza: audio: Add more sampling rates to voip_{rx,tx} *(ID: [513289](https://review.lineageos.org/c/513289))*
- **[LineageOS/android_device_motorola_milanf]** milanf: audio: Add more sampling rates to voip_{rx,tx} *(ID: [513288](https://review.lineageos.org/c/513288))*
- **[LineageOS/android_device_motorola_miami]** miami: audio: Enable direct flag for voip_rx *(ID: [513287](https://review.lineageos.org/c/513287))*
- **[LineageOS/android_device_motorola_bronco]** bronco: overlay: set refresh rate for low brightness zone *(ID: [513196](https://review.lineageos.org/c/513196))*
- **[LineageOS/android_device_motorola_miami]** miami: audio: Use valid ACDB ids for NN mics *(ID: [513221](https://review.lineageos.org/c/513221))*
- **[LineageOS/android_device_motorola_miami]** miami: audio: Restore DIRECT for voip_rx *(ID: [513220](https://review.lineageos.org/c/513220))*
- **[LineageOS/android_device_motorola_miami]** miami: audio: Fix VoIP echo reference *(ID: [513219](https://review.lineageos.org/c/513219))*
- **[LineageOS/android_device_motorola_beckham]** beckham: overlay: Route dock media audio to the analog dock *(ID: [506922](https://review.lineageos.org/c/506922))*

</details>

---
*Generado automáticamente por Ra Pulse*
