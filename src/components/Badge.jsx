import React from 'react';
import { motion } from 'framer-motion';

const Badge = ({
  children,
  color = 'slate', // slate, primary, violet, cyan, emerald, amber, rose
  onClick,
  active = false,
  className = '',
  icon: Icon,
  ...props
}) => {
  const colorStyles = {
    slate: 'bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 border-slate-200/50 dark:border-slate-800',
    primary: 'bg-primary-500/10 text-primary-600 dark:text-primary-300 border-primary-500/20 dark:border-primary-500/20',
    violet: 'bg-violet-500/10 text-violet-600 dark:text-violet-300 border-violet-500/20 dark:border-violet-500/20',
    cyan: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border-cyan-500/20 dark:border-cyan-500/20',
    emerald: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border-emerald-500/20 dark:border-emerald-500/20',
    amber: 'bg-amber-500/10 text-amber-600 dark:text-amber-300 border-amber-500/20 dark:border-amber-500/20',
    rose: 'bg-rose-500/10 text-rose-600 dark:text-rose-300 border-rose-500/20 dark:border-rose-500/20',
  };

  const activeStyles = {
    slate: 'bg-slate-700 text-white dark:bg-slate-300 dark:text-slate-900 border-transparent',
    primary: 'bg-primary-600 text-white dark:bg-primary-500 dark:text-white border-transparent',
    violet: 'bg-violet-600 text-white dark:bg-violet-500 dark:text-white border-transparent',
    cyan: 'bg-cyan-600 text-white dark:bg-cyan-500 dark:text-white border-transparent',
    emerald: 'bg-emerald-600 text-white dark:bg-emerald-500 dark:text-white border-transparent',
    amber: 'bg-amber-600 text-white dark:bg-amber-500 dark:text-white border-transparent',
    rose: 'bg-rose-600 text-white dark:bg-rose-500 dark:text-white border-transparent',
  };

  const baseStyles = 'inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border transition-all duration-300 select-none';
  const resolvedStyles = onClick && active ? activeStyles[color] : colorStyles[color];
  const pointerClass = onClick ? 'cursor-pointer hover:scale-105 active:scale-95' : '';

  const badgeContent = (
    <>
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {children}
    </>
  );

  if (onClick) {
    return (
      <motion.button
        type="button"
        onClick={onClick}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.95 }}
        className={`${baseStyles} ${resolvedStyles} ${pointerClass} ${className}`}
        {...props}
      >
        {badgeContent}
      </motion.button>
    );
  }

  return (
    <div className={`${baseStyles} ${resolvedStyles} ${className}`} {...props}>
      {badgeContent}
    </div>
  );
};

export default Badge;
