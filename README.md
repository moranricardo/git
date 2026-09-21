# ⚡ Ra Pulse - Telemetría de Kernels

![Última sync](https://img.shields.io/badge/Sincronizado-2026-09-21-brightgreen)
![Analizados](https://img.shields.io/badge/Analizados-500-blue)

> Monitor automatizado para la auditoría de parches en LineageOS y Motorola.

---

## 🚨 Parches Críticos Detectados (307)

<details>
<summary><b>Click para desplegar parches críticos</b></summary>

- **[LineageOS/android_kernel_qcom_sm8450]** UPSTREAM: bpf: Fix kernel address leakage in atomic cmpxchg's r0 aux reg *(ID: [471992](https://review.lineageos.org/c/471992))*
- **[LineageOS/android_kernel_qcom_sm8450]** UPSTREAM: bpf: Fix kernel address leakage in atomic fetch *(ID: [471991](https://review.lineageos.org/c/471991))*
- **[LineageOS/android_kernel_qcom_sm8450]** UPSTREAM: bpf: Make sure bpf_disable_instrumentation() is safe vs preemption. *(ID: [471990](https://review.lineageos.org/c/471990))*
- **[LineageOS/android_kernel_qcom_sm8450]** UPSTREAM: bpf: Forbid bpf_ktime_get_coarse_ns and bpf_timer_* in tracing progs *(ID: [471989](https://review.lineageos.org/c/471989))*
- **[LineageOS/android_kernel_qcom_sm8450]** UPSTREAM: bpf: Fix inner map state pruning regression. *(ID: [471988](https://review.lineageos.org/c/471988))*
- **[LineageOS/android_kernel_qcom_sm8450]** UPSTREAM: bpf, sockmap: sk_skb data_end access incorrect when src_reg = dst_reg *(ID: [471987](https://review.lineageos.org/c/471987))*
- **[LineageOS/android_kernel_qcom_sm8450]** UPSTREAM: bpf: Fixes possible race in update_prog_stats() for 32bit arches *(ID: [471986](https://review.lineageos.org/c/471986))*
- **[LineageOS/android_kernel_qcom_sm8450]** UPSTREAM: inet: remove races in inet{6}_getname() *(ID: [471985](https://review.lineageos.org/c/471985))*
- **[LineageOS/android_kernel_qcom_sm8450]** UPSTREAM: net: Keep vertical alignment *(ID: [471984](https://review.lineageos.org/c/471984))*
- **[LineageOS/android_kernel_qcom_sm8450]** UPSTREAM: net: ipv4: Consolidate ipv4_mtu and ip_dst_mtu_maybe_forward *(ID: [471983](https://review.lineageos.org/c/471983))*
- **[LineageOS/android_kernel_qcom_sm8450]** UPSTREAM: bpf: Replace RET_XXX_OR_NULL with RET_XXX | PTR_MAYBE_NULL *(ID: [472007](https://review.lineageos.org/c/472007))*
- **[LineageOS/android_kernel_qcom_sm8450]** UPSTREAM: bpf: Replace ARG_XXX_OR_NULL with ARG_XXX | PTR_MAYBE_NULL *(ID: [472006](https://review.lineageos.org/c/472006))*
- **[LineageOS/android_kernel_qcom_sm8450]** UPSTREAM: bpf: Introduce composable reg, ret and arg types. *(ID: [472005](https://review.lineageos.org/c/472005))*
- **[LineageOS/android_kernel_qcom_sm8450]** UPSTREAM: bpf: Make remote_port field in struct bpf_sk_lookup 16-bit wide *(ID: [472004](https://review.lineageos.org/c/472004))*
- **[LineageOS/android_kernel_qcom_sm8450]** UPSTREAM: bpf: Fix UAF due to race between btf_try_get_module and load_module *(ID: [472003](https://review.lineageos.org/c/472003))*
- **[LineageOS/android_kernel_qcom_sm8450]** UPSTREAM: bpf: Fix possible race in inc_misses_counter *(ID: [472002](https://review.lineageos.org/c/472002))*
- **[LineageOS/android_kernel_qcom_sm8450]** BACKPORT: bpf: Use u64_stats_t in struct bpf_prog_stats *(ID: [472001](https://review.lineageos.org/c/472001))*
- **[LineageOS/android_kernel_qcom_sm8450]** UPSTREAM: bpf: Fix a bpf_timer initialization issue *(ID: [472000](https://review.lineageos.org/c/472000))*
- **[LineageOS/android_kernel_qcom_sm8450]** UPSTREAM: bpf: Fix crash due to incorrect copy_map_value *(ID: [471999](https://review.lineageos.org/c/471999))*
- **[LineageOS/android_kernel_qcom_sm8450]** UPSTREAM: FROMGIT: bpf: Add config to allow loading modules with BTF mismatches *(ID: [471998](https://review.lineageos.org/c/471998))*
- **[LineageOS/android_kernel_qcom_sm8450]** BACKPORT: kbuild: Build kernel module BTFs if BTF is enabled and pahole supports it *(ID: [471997](https://review.lineageos.org/c/471997))*
- **[LineageOS/android_kernel_qcom_sm8450]** BACKPORT: fs: add vfs_parse_fs_param_source() helper *(ID: [471996](https://review.lineageos.org/c/471996))*
- **[LineageOS/android_kernel_qcom_sm8450]** UPSTREAM: bpf: Mark PTR_TO_FUNC register initially with zero offset *(ID: [471995](https://review.lineageos.org/c/471995))*
- **[LineageOS/android_kernel_qcom_sm8450]** UPSTREAM: bpf: Fix mount source show for bpffs *(ID: [471994](https://review.lineageos.org/c/471994))*
- **[LineageOS/android_kernel_qcom_sm8450]** UPSTREAM: bpf: Fix verifier support for validation of async callbacks *(ID: [471993](https://review.lineageos.org/c/471993))*
- **[LineageOS/android_kernel_qcom_sm8450]** UPSTREAM: bpf: Fix memory leaks in __check_func_call *(ID: [472027](https://review.lineageos.org/c/472027))*
- **[LineageOS/android_kernel_qcom_sm8450]** UPSTREAM: bpf, verifier: Fix memory leak in array reallocation for stack state *(ID: [472026](https://review.lineageos.org/c/472026))*
- **[LineageOS/android_kernel_qcom_sm8450]** UPSTREAM: bpf: Use this_cpu_{inc|dec|inc_return} for bpf_task_storage_busy *(ID: [472025](https://review.lineageos.org/c/472025))*
- **[LineageOS/android_kernel_qcom_sm8450]** UPSTREAM: bpf: Propagate error from htab_lock_bucket() to userspace *(ID: [472024](https://review.lineageos.org/c/472024))*
- **[LineageOS/android_kernel_qcom_sm8450]** UPSTREAM: bpf: Disable preemption when increasing per-cpu map_locked *(ID: [472023](https://review.lineageos.org/c/472023))*

</details>

## 📱 Línea Motorola Activa (2)

<details>
<summary><b>Click para desplegar cambios Motorola</b></summary>

- **[LineageOS/android_device_motorola_smith]** smith: Force gesture navigation mode *(ID: [503641](https://review.lineageos.org/c/503641))*
- **[LineageOS/android_device_motorola_smith]** smith: Allow setting independent dpi settings for each display *(ID: [503084](https://review.lineageos.org/c/503084))*

</details>

---
*Generado automáticamente por Ra Pulse*
