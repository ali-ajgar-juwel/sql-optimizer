window.QPOptimizer = {
  render() {
    const a = QPDB.state.analyses[0];
    if (!a) return `<div class="page-head"><div><h1>Query optimizer</h1><div class="subhead">Rule-based SQL review with explanations and suggested rewrites.</div></div><button class="btn primary" data-go="analyzer">Open SQL workspace</button></div><div class="panel empty">No analysis yet. Run an analysis from the SQL workspace to see findings here.</div>`;
    const issues = a.issues.map(i => {
      const cls = i.severity === "High" ? "bad" : (i.severity === "Medium" ? "warn" : "info");
      return `<div class="issue"><div style="display:flex;justify-content:space-between"><h4>${QPDB.esc(i.title)}</h4><span class="tag ${cls}">${QPDB.esc(i.severity)}</span></div><p>${QPDB.esc(i.explanation)}</p><p><b>Why it matters:</b> ${QPDB.esc(i.why)}</p><p><b>Suggested improvement:</b> ${QPDB.esc(i.suggestion)}</p></div>`;
    }).join("") || `<div class="empty">No common rule-based issues detected. This does not prove the query is optimal.</div>`;
    return `<div class="page-head"><div><h1>Query optimizer</h1><div class="subhead">Rule-based SQL review with explanations and suggested rewrites.</div></div><button class="btn primary" data-go="analyzer">Open SQL workspace</button></div><div class="panel"><div class="panel-head"><div><b class="panel-title">Latest analysis · ${new Date(a.date).toLocaleString()}</b><div class="panel-sub">Complexity: ${QPDB.esc(a.complexity)} · ${a.issues.length} heuristic signal(s)</div></div><span class="tag warn">Review required</span></div><div class="panel-body">${issues}<div class="issue-grid"><div><b style="font-size:11px">Original SQL</b><pre class="code-block">${QPDB.esc(a.sql)}</pre></div><div><b style="font-size:11px">Suggested direction</b><pre class="code-block">${QPDB.esc(a.rewrite)}</pre></div></div><p class="footer-note">Rewrites are suggestions, not guaranteed equivalent transformations. Validate semantics, constraints and results before adoption.</p></div></div>`;
  }
};
